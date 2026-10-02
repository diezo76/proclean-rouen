#!/usr/bin/env python3
# Contrôle du JSON-LD des pages générées. À lancer après `npm run build` :
#   python3 scripts/check-jsonld.py [dossier_de_sortie]
# Règles vérifiées : docs/donnees-structurees.md
import re,json,glob,os,sys,html,tempfile
D='.next/server/app'; OUT=sys.argv[1] if len(sys.argv)>1 else tempfile.mkdtemp(prefix='jsonld-'); BID='https://societe-nettoyage-rouen.fr/#business'
pages=sorted(p for p in glob.glob(D+'/*.html') if os.path.basename(p) not in ('_not-found.html','404.html','500.html'))
main=open('content/rouen.ts',encoding='utf-8').read()
mp=[(m.start(),m.group(1)) for m in re.finditer(r"\n    '([a-z-]+-rouen)': \{", main)]
grid={}
for i,(p,k) in enumerate(mp):
    blk=main[p:mp[i+1][0] if i+1<len(mp) else len(main)]
    grid[k]=[(a.replace("\\'","'"),b) for a,b in re.findall(r"\{ label: '((?:[^'\\]|\\.)*)', price: '((?:[^'\\]|\\.)*)' \}", blk)]
def nums(t): return [float(x.replace('.','').replace(' ','').replace(',','.')) for x in re.findall(r"(\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?)\s*€", t)]
def refs(o,acc):
    if isinstance(o,dict):
        if set(o.keys())=={'@id'}: acc.append(o['@id'])
        for v in o.values(): refs(v,acc)
    elif isinstance(o,list):
        for v in o: refs(v,acc)
    return acc
def walk(o,key,acc):
    if isinstance(o,dict):
        for k,v in o.items():
            if k==key: acc.append(v)
            walk(v,key,acc)
    elif isinstance(o,list):
        for v in o: walk(v,key,acc)
    return acc
bad=[]; summary=[]; offers_total=0
for p in pages:
    name=os.path.basename(p)[:-5]; h=open(p,encoding='utf-8').read()
    blocks=re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>',h,re.S)
    if len(blocks)!=1: bad.append((name,f"{len(blocks)} blocs")); continue
    try: d=json.loads(blocks[0])
    except Exception as e: bad.append((name,'JSON invalide '+str(e))); continue
    open(f"{OUT}/{name}.json",'w',encoding='utf-8').write(json.dumps(d,ensure_ascii=False,indent=2))
    g=d.get('@graph',[]); raw=json.dumps(d,ensure_ascii=False)
    if d.get('@context')!='https://schema.org': bad.append((name,'@context'))
    full=[n for n in g if n.get('@id')==BID and 'address' in n]
    if len(full)!=1: bad.append((name,f"{len(full)} entité complète"))
    ids={n['@id'] for n in g if '@id' in n}
    for r in refs(g,[]):
        if r not in ids: bad.append((name,'référence orpheline '+r))
    if raw.count('"streetAddress"')!=1: bad.append((name,f"adresse répétée x{raw.count(chr(34)+'streetAddress'+chr(34))}"))
    for w in ('aggregateRating','"review"','ratingValue','reviewCount','5/5'):
        if w in raw: bad.append((name,'interdit: '+w))
    if re.search(r'https?://[^"]*proclean20\.fr',raw): bad.append((name,'URL proclean20.fr'))
    loc=walk(g,'addressLocality',[])
    if loc!=['Le Havre']: bad.append((name,f"addressLocality={loc}"))
    types=[('+'.join(n['@type']) if isinstance(n['@type'],list) else n['@type']) for n in g]
    # prix
    svc=[n for n in g if n.get('@type')=='Service']
    nb=0
    if name in grid:
        cat=(svc[0].get('hasOfferCatalog') or {}).get('itemListElement',[]) if svc else []
        nb=len(cat); offers_total+=nb
        if nb!=len(grid[name]): bad.append((name,f"{nb} offres pour {len(grid[name])} lignes"))
        vis=html.unescape(re.sub(r'<[^>]+>',' ',h))
        for (lab,pr),o in zip(grid[name],cat):
            ps=o['priceSpecification']; got=[ps[k] for k in ('price','minPrice','maxPrice') if k in ps]
            exp=nums(pr)
            if o['itemOffered']['name']!=lab or sorted(got)!=sorted(exp): bad.append((name,f"prix {lab}: {pr} -> {ps}"))
            if ('/' in pr) != ('unitText' in ps): bad.append((name,f"unité {lab}: {pr} -> {ps}"))
            if 'unitText' in ps and not pr.endswith('/'+ps['unitText']): bad.append((name,f"unitText {lab}"))
            if ps.get('priceCurrency')!='EUR': bad.append((name,'devise'))
            if lab not in vis or pr not in vis: bad.append((name,f"texte non visible: {lab} | {pr}"))
    summary.append((name,types,nb))
print(f"pages contrôlées : {len(pages)} | offres de prix déclarées : {offers_total} | anomalies : {len(bad)}")
for b in bad: print("  ✗",b)
from collections import Counter
c=Counter((tuple(t)) for _,t,_ in summary)
for k,v in c.most_common(): print(f"  {v:2d} pages : {' · '.join(k)}")
for n,t,nb in summary:
    if nb: print(f"  offres {n}: {nb}")
print("JSON extraits dans :",OUT)
sys.exit(1 if bad else 0)
