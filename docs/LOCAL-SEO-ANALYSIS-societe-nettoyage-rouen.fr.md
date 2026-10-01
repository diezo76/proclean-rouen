# Audit SEO local — societe-nettoyage-rouen.fr

**Date** : 2026-07-15
**Méthode** : skill `seo-local` (6 dimensions pondérées, référentiel Whitespark 2026 / Sterling Sky / BrightLocal 2026)
**Périmètre** : analyse depuis les pages publiques servies en production + schéma JSON-LD + sitemap + recherche de citations. Pas d'accès au Google Business Profile ni à Search Console.

---

## Score global : 35/100

| # | Dimension | Poids | Score | Pondéré |
|---|-----------|-------|-------|---------|
| 1 | Signaux GBP | 25% | 3/25 | 3.0 |
| 2 | Avis & réputation | 20% | 5/20 | 5.0 |
| 3 | SEO local on-page | 20% | 14/20 | 14.0 |
| 4 | Cohérence NAP & citations | 15% | 5/15 | 5.0 |
| 5 | Schema local | 10% | 6/10 | 6.0 |
| 6 | Liens & autorité locale | 10% | 2/10 | 2.0 |
| | **Total** | **100%** | | **35/100** |

Lecture : le site est **bien construit sur ce qui dépend du code** (on-page 14/20, schema 6/10) et **quasi vide sur ce qui dépend de l'entreprise réelle** (GBP 3/25, avis 5/20, autorité 2/10). Le travail Phase B/D a produit ce qu'il pouvait produire ; le plafond actuel n'est plus un problème de code.

---

## Le constat structurant

**ProClean est une entreprise du Havre, pas de Rouen.**

| Source | Adresse | Téléphone |
|--------|---------|-----------|
| Footer societe-nettoyage-rouen.fr | 7 Rue Washington, 76600 Le Havre | 07 49 13 06 83 |
| JSON-LD `LocalBusiness` (toutes pages) | 7 Rue Washington, 76600 Le Havre | +33749130683 |
| proclean20.fr (site principal du Havre) | 7 Rue Washington, 76600 Le Havre | 07 49 13 06 83 |
| SIRET affiché | 93751600300012 (établissement unique) | — |

Le NAP est donc **parfaitement cohérent** entre les trois sources — mais il pointe sur Le Havre, à ~90 km de Rouen.

Conséquence, à connaître avant d'investir un euro de plus :

- **La proximité pèse 55,2 % de la variance de classement du local pack** (étude ML Search Atlas). Un établissement situé au Havre ne peut pas se classer dans le pack local de Rouen, quelle que soit la qualité du site.
- Il n'existe **aucun GBP Rouen** : pas d'embed Maps, pas de place ID, pas de widget avis, aucune fiche Rouen trouvée en recherche. Le seul GBP est celui du Havre.
- **Contradiction publique entre les deux sites** : proclean20.fr écrit « certains chantiers spécifiques comme le traitement du syndrome de Diogène nous amènent *parfois* jusqu'à Rouen ou Dieppe », alors que societe-nettoyage-rouen.fr revendique une couverture complète de la métropole rouennaise et une connaissance fine des quartiers. Les deux domaines partagent le même téléphone et le même SIRET : Google, et les LLM qui sourcent Bing/annuaires, peuvent rapprocher les deux et lire l'incohérence.

**Le site ne joue donc pas dans le local pack de Rouen. Il joue dans le local organique** (les résultats bleus classiques sous le pack), où la proximité ne compte pas et où les pages de service dédiées sont le facteur n°1. C'est exactement ce que le site fait bien. La stratégie n'est pas absurde — mais elle doit être assumée comme telle, et le plafond de 35/100 vient du fait qu'on est noté sur une grille qui inclut 25 % de GBP inaccessible en l'état.

---

## Type d'activité et vertical

- **Type** : Service Area Business (SAB) déguisé en brick-and-mortar. Une adresse physique est affichée, mais elle n'est pas le lieu de service et n'est pas à Rouen. Les checks « embed Maps » et « cohérence adresse physique » sont évalués dans cette optique.
- **Vertical détecté** : Home Services (nettoyage) — signaux : zone d'intervention, devis gratuit, prestations sur site, pas de vitrine.
- **Sous-type schema attendu** : `CleaningService` → **correctement implémenté** (voir dimension 5).

---

## Dimension 1 — Signaux GBP : 3/25

La catégorie principale GBP est le facteur n°1 du pack local (Whitespark, score 193), et une catégorie erronée est le facteur négatif n°1 (score 176). Ici la question ne se pose même pas : il n'y a pas de fiche.

| Signal | État |
|--------|------|
| GBP Rouen existant | ❌ Aucun |
| Embed Google Maps sur le site | ❌ Absent (`google.com/maps` introuvable dans le HTML) |
| Place ID / widget avis GBP | ❌ Absent |
| Catégorie principale | ⚠️ Non évaluable (pas de fiche Rouen) |
| Catégories secondaires (optimal : 4) | ⚠️ Non évaluable |
| Posts GBP | ❌ Aucun signal |
| Photos / vidéos | ❌ Aucun signal (45 % de demandes d'itinéraire en plus avec photos, Agency Jet) |
| Horaires visibles sur le site | ❌ Absents de la page **et** du schema (`openingHoursSpecification` manquant) — or les entreprises ouvertes au moment de la requête sont mieux classées (facteur n°5) |
| Q&A → FAQ site | ✅ Bon point : FAQ présentes et uniques par page (le Q&A GBP a été déprécié en déc. 2025, recréer ce contenu en FAQ sur le site est précisément la bonne réponse) |

Les 3 points attribués récompensent la FAQ et l'existence d'un GBP d'entreprise (Le Havre), pas une présence Rouen.

**Point de vigilance réglementaire** : créer un GBP à une adresse de domiciliation à Rouen sans personnel ni présence effective sur place est une violation directe des règles Google (suspension de fiche, et la suspension peut affecter la fiche du Havre, rattachée au même compte). Ce n'est pas une option de contournement.

---

## Dimension 2 — Avis & réputation : 5/20

Le poids des avis est passé à ~20 % (contre 16 %). La **vélocité** compte plus que le total : règle des 18 jours de Sterling Sky — les classements décrochent après 3 semaines sans nouvel avis.

| Signal | État |
|--------|------|
| Note affichée | ✅ « 5/5 sur Google » |
| Nombre d'avis | ❌ **Jamais indiqué.** Le site affiche « 530+ interventions » et « 98 % clients satisfaits » — ce sont des chiffres d'activité, pas des avis. Seuil magique : 10 avis (Sterling Sky) |
| `aggregateRating` en schema | ❌ Absent → aucun rich result étoiles possible (43 % de CTR en plus, cas Webstix) |
| Récence | ❌ Aucun signal (74 % des consommateurs ne regardent que les 3 derniers mois) |
| Réponses du propriétaire | ❌ Aucun signal (88 % feraient appel à une entreprise qui répond) |
| Multi-plateformes | ❌ Aucune. Les consommateurs consultent en moyenne **6 sites d'avis** (BrightLocal 2026). Absent de PagesJaunes Rouen, Trustpilot, Facebook |
| Témoignages | ⚠️ 1 seul visible (« Steven A. »), non sourcé/non cliquable vers le GBP |
| Review gating | ✅ Aucun signal de pré-filtrage détecté (interdit par Google, 53 088 $/infraction FTC) |

**Le problème de fond** : les avis du GBP Le Havre ne se transfèrent pas à Rouen. Une note « 5/5 » sans nombre d'avis affiché est aussi peu convaincante pour un prospect que pour Google.

---

## Dimension 3 — SEO local on-page : 14/20

**C'est le point fort du projet.** Les pages de service dédiées sont à la fois le facteur n°1 du local organique **et** le facteur n°2 de visibilité IA (Whitespark 2026) — et il y en a 28.

Ce qui fonctionne :

| Signal | État |
|--------|------|
| Title avec ville + service | ✅ « ProClean — Nettoyage professionnel à Rouen » |
| Meta description | ✅ Présente, avec service + ville + CTA + téléphone |
| Pages de service dédiées | ✅ **28 pages** (canapé, tapis, moquette, matelas, Diogène, après-travaux, vitres, bureaux, parking, immeubles, toiture…) |
| Pages villes | ✅ 12 (Sotteville, Saint-Étienne-du-Rouvray, Grand/Petit-Quevilly, Mont-Saint-Aignan, Bois-Guillaume, Canteleu, Maromme, Déville, Darnétal, Bihorel, Elbeuf) |
| H1 local sur pages villes | ✅ « Nettoyage professionnel à Bihorel » |
| NAP visible en HTML | ✅ Footer |
| Click-to-call | ✅ `tel:+33749130683` présent, header et hero |
| Maillage interne | ✅ Hub-and-spoke réel : chaque page ville renvoie vers les services **et** les villes voisines ; tout est à ≤3 clics de l'accueil |
| Canonicals | ✅ Corrects et auto-référents |
| robots.txt / sitemap.xml | ✅ Propres, 41 URLs, `/api/` et `/_next/` bloqués |
| Breadcrumb schema | ✅ Sur les pages villes (quick win 2026-07-06) |

Ce qui coûte les 6 points :

- **H1 de l'accueil sans ville** : « Nettoyage de Pro pour les Pros et les Particuliers ». Le title porte « Rouen », pas le H1. C'est la page la plus forte du site qui perd son signal local le plus visible.
- **Pages villes minces** : ~2 600 caractères de texte total *nav et footer compris*, soit ~1 500–1 800 caractères de contenu propre. C'est peu pour porter une intention commerciale.
- **Risque doorway modéré — le swap test ne passe pas complètement.** En neutralisant le nom de la ville, les pages villes restent similaires entre elles à **44–55 %** :

  | Comparaison (nom de ville neutralisé) | Similarité |
  |---|---|
  | Bihorel vs Canteleu | 54,7 % |
  | Canteleu vs Darnétal | 49,0 % |
  | Darnétal vs Sotteville-lès-Rouen | 47,2 % |
  | Bihorel vs Darnétal | 48,0 % |
  | Canteleu vs Sotteville | 45,5 % |
  | Bihorel vs Sotteville | 44,4 % |

  Soit **45–55 % d'unicité**, sous le seuil de consensus de 60–70 %. Nuance importante : la part vraiment rédigée *est* spécifique (« Bihorel est une petite commune résidentielle coincée entre Rouen et Bois-Guillaume… », FAQ sur mesure « Bihorel c'est petit, vous venez quand même ? ») — le travail Phase D est visible et de bonne qualité. Ce qui plombe le ratio, c'est la **grille de services identique** répétée sur les 12 pages, qui représente la majorité du texte. Précédent à garder en tête : une société de CVC a perdu 80 % de ses classements et 63 % de son trafic sur le Core Update de mars 2024 pour ce motif.
- **Title dupliqué** : « Nettoyage professionnel à Bihorel | ProClean | ProClean Rouen » — la marque apparaît deux fois, ce qui consomme des pixels utiles dans la SERP. Vient probablement d'un `template` de metadata Next.js qui s'ajoute à un title déjà suffixé.
- **Pas d'embed Maps** (renfort géographique ; à charger en lazy-load pour ne pas peser sur les Core Web Vitals).
- Le point n°6 du plan Phase D reste ouvert : structure « Étape 1/2/3 » identique dans `content/rouen-sections.ts`.

---

## Dimension 4 — Cohérence NAP & citations : 5/15

Les citations reculent pour le pack traditionnel (Google a retiré « directories » de sa définition de la prominence en juillet 2025), mais **3 des 5 premiers facteurs de visibilité IA sont liés aux citations** (Whitespark 2026).

**Cohérence NAP : excellente (3/3 sources identiques).** Aucune divergence entre le HTML visible, le JSON-LD et proclean20.fr. C'est rare et c'est à préserver.

**Citations : quasi nulles.**

| Plateforme | État | Enjeu |
|-----------|------|-------|
| PagesJaunes (Rouen) | ❌ Absent | Tier 1 en France |
| PagesJaunes (Le Havre) | ⚠️ Non confirmé pour ProClean | — |
| Bing Places | ❌ Aucun signal | **Critique** : alimente ChatGPT, Copilot, Alexa |
| Apple Business Connect | ❌ Aucun signal | Usage doublé à 27 % (BrightLocal 2026) |
| Facebook page | ❌ Aucun lien depuis le site | — |
| Trustpilot | ❌ Absent | — |
| Annuaires nettoyage (Qualipropre, FEP, Starofservice) | ❌ Absents | Verticaux Home Services |
| Agrégateurs (Data Axle, Foursquare) | ❌ Absents | Distribution en aval |
| SIRET affiché | ✅ Bon signal de confiance (équivalent français du BBB) | — |

**Risque à surveiller** : deux domaines (`proclean20.fr` et `societe-nettoyage-rouen.fr`) pour un même SIRET et un même numéro. Une fiche GBP ne peut pointer que vers un seul site. Si les deux sont soumis aux mêmes annuaires avec le même téléphone, les citations se contredisent et diluent l'entité.

---

## Dimension 5 — Schema local : 6/10

Le schema n'est pas un facteur de classement direct (confirmé par John Mueller), mais il conditionne les rich results et la lecture par les IA.

**Ce qui est bien fait :**
- ✅ **Sous-type correct** : `["CleaningService", "LocalBusiness"]` — c'est le bon choix pour le vertical Home Services, souvent raté sur ce type de projet.
- ✅ `Organization` + `ContactPoint` en complément.
- ✅ `FAQPage` **avec des questions uniques par page** (pas de copier-coller) — excellent pour l'IA et les featured snippets.
- ✅ `BreadcrumbList` sur les pages villes.
- ✅ JSON-LD valide, pas de placeholder.
- ✅ `priceRange` (« €€ ») et `paymentAccepted` renseignés.

**Ce qui manque :**
- ❌ **`geo`** : aucune coordonnée (5+ décimales recommandées). Manque majeur pour un business local.
- ❌ **`openingHoursSpecification`** : absent — facteur n°5 du pack.
- ❌ **`aggregateRating`** : absent alors que le site affiche « 5/5 » en clair. Le rich result étoiles est laissé sur la table.
- ❌ **`image`** : absent.
- ❌ **`sameAs`** : aucun lien vers GBP, Facebook, annuaires.
- ⚠️ **`areaServed` figé sur Rouen partout** : la page Bihorel sert exactement le même bloc `LocalBusiness` que l'accueil, avec `areaServed: {"@type":"City","name":"Rouen"}`. Chaque page ville devrait déclarer sa propre ville.
- ⚠️ **Pas de `@id` unique par page** : les 41 pages déclarent la même entité `LocalBusiness` sans identifiant distinct, ni `branchOf` vers l'`Organization`.

---

## Dimension 6 — Liens & autorité locale : 2/10

Les liens reculent pour le pack mais restent **~26 % du local organique** (Whitespark 2026, groupe de facteurs n°2) — et c'est précisément le terrain sur lequel ce site joue. Les placements en listes « best of » sont le **facteur n°1 de citation IA**.

| Signal | État |
|--------|------|
| CCI Rouen Métropole | ❌ Aucune mention (~80 % de visites consommateurs en plus, GlueUp) |
| Certifications sectorielles (Qualipropre, FEP) | ❌ Aucune |
| Presse / mentions locales | ❌ Aucune |
| Sponsoring, événements, partenariats locaux | ❌ Aucun |
| Listes « best of » / comparatifs | ❌ Absent |
| SIRET public | ✅ Seul signal de confiance présent |

Les mentions de marque corrèlent **3× plus fortement** avec la visibilité IA que les backlinks (Ahrefs : 0,664 vs 0,218). Référence de vélocité : 5–10 liens locaux de qualité par mois pour une TPE.

---

## Impact IA (contexte local)

Pour une analyse complète, utiliser le skill `ai-seo`. Éléments spécifiquement locaux :

- Les AI Overviews apparaissent sur jusqu'à **68 %** des recherches locales (Whitespark Q2 2025).
- ChatGPT convertit à **15,9 %** contre **1,76 %** pour l'organique Google (Seer Interactive) ; 45 % des consommateurs utilisent l'IA pour des recommandations locales, contre 6 % avant (BrightLocal 2026).
- **ChatGPT n'accède pas au GBP.** Il source Bing, Yelp, TripAdvisor, BBB, Reddit. Pour ProClean, cela veut dire qu'**il est possible de gagner en visibilité IA sans GBP Rouen** — via Bing Places, les annuaires et les mentions. C'est la voie la moins bloquée par la contrainte géographique.
- Les packs locaux IA (mobile US) n'affichent plus que 1–2 entreprises, soit 32 % de moins (Sterling Sky) — la compétition pour le pack se durcit, ce qui renforce l'intérêt de la voie organique + IA.

---

## Les 3 actions prioritaires, classées par impact

### 1. Trancher la contradiction Le Havre ↔ Rouen (impact : débloque ou plafonne tout le reste)

C'est la décision dont dépendent les 25 % de la note GBP et le plafond structurel du projet. Trois options, à choisir explicitement :

- **A — Ouvrir un établissement réel à Rouen** (bureau + personnel + présence effective, SIRET secondaire), puis créer le GBP Rouen. C'est la seule voie qui ouvre le pack local. Coût réel, délai réel.
- **B — Assumer le SAB depuis Le Havre** : le GBP reste au Havre, on ajoute Rouen en `areaServed`, et on accepte de ne jouer que le local organique + l'IA. Le site est déjà construit pour ça. Gratuit, immédiat.
- **C — Statu quo** : le site continue de revendiquer une présence rouennaise que l'entreprise n'a pas, en contradiction publique avec proclean20.fr. C'est le risque de crédibilité, pas seulement de classement.

Quelle que soit l'option, **aligner immédiatement le discours des deux domaines** : soit proclean20.fr assume Rouen comme zone desservie, soit societe-nettoyage-rouen.fr cesse de laisser croire à une implantation locale. À ne pas faire : domicilier une boîte aux lettres à Rouen pour créer un GBP — suspension de fiche, avec effet possible sur celle du Havre.

### 2. Lancer la machine à avis Google (impact : 20 % de la note, actuellement à 5/20)

Le levier le plus rentable qui ne dépend d'aucune décision d'entreprise. Après ~530 interventions, il devrait exister bien plus qu'un témoignage.

- Passer le seuil des **10 avis** (Sterling Sky), puis tenir la **cadence des 18 jours** — les classements décrochent après 3 semaines sans nouvel avis.
- Demander l'avis en fin d'intervention, lien direct vers le GBP, sans aucun pré-filtrage de satisfaction (le review gating est interdit par Google et sanctionné jusqu'à 53 088 $/infraction par la FTC).
- **Répondre à 100 % des avis** (88 % des consommateurs privilégient une entreprise qui répond).
- Sur le site : afficher le **nombre d'avis** à côté du « 5/5 » et ajouter `aggregateRating` au schema → rich result étoiles (+43 % de CTR, cas Webstix). Ne renseigner ce champ qu'avec les chiffres réels du GBP.
- Ouvrir un second front : PagesJaunes et Facebook (les consommateurs consultent en moyenne 6 sites d'avis).

### 3. Passer les pages villes au-dessus de 60 % d'unicité + compléter le schema (impact : protège l'actif existant)

Les 40 pages sont le vrai capital du projet ; le risque est de le perdre sur un Core Update.

- **Casser la grille de services identique** répétée sur les 12 pages villes — c'est elle qui écrase le ratio d'unicité à 45–55 %, pas les intros (qui sont bonnes). Varier l'ordre, la sélection et la formulation des services selon le profil réel de la commune. Traiter au passage la structure « Étape 1/2/3 » de `content/rouen-sections.ts` (Phase D.6, toujours ouverte).
- Objectif : repasser le swap test **au-dessus de 60 % d'unicité**. Levier le plus efficace à volume égal : ajouter par ville ce qui n'est pas duplicable — photos de chantiers locaux, témoignages géolocalisés, contraintes spécifiques (accès, stationnement, type de bâti).
- **Ajouter au schema** : `geo` (5+ décimales), `openingHoursSpecification`, `image`, `sameAs`. Faire varier `areaServed` par page ville et donner un `@id` unique à chaque page + `branchOf` vers l'`Organization`.
- **Corriger le title dupliqué** « … | ProClean | ProClean Rouen » (template de metadata Next.js qui double le suffixe de marque).
- **Mettre « Rouen » dans le H1 de l'accueil**.
- Quick wins gratuits en parallèle : **Bing Places** (alimente ChatGPT/Copilot/Alexa — le meilleur rapport effort/visibilité IA du lot) et **Apple Business Connect**.

---

## Limites de cet audit

Ce que cette analyse **n'a pas pu** évaluer, faute d'accès ou d'outil :

- **Positions réelles dans le pack local** et couverture geo-grid (nécessite Local Falcon, BrightLocal, Places Scout).
- **Données GBP internes** : catégories réelles, Insights, posts, photos, nombre exact d'avis (nécessite l'accès au compte GBP).
- **Backlinks et Domain Authority** (nécessite Ahrefs, Semrush ou Majestic).
- **Audit de citations exhaustif** : seules des recherches ponctuelles ont été faites, pas un scan des ~50 annuaires (nécessite BrightLocal Citation Tracker ou Whitespark).
- **Trafic et requêtes réelles** (nécessite Search Console + Analytics).
- **Core Web Vitals terrain** (nécessite CrUX / PageSpeed Insights — voir plutôt `docs/audit-proclean-2026-07.md`).
- Le **swap test** porte sur 4 des 12 pages villes (Bihorel, Canteleu, Darnétal, Sotteville-lès-Rouen) ; les 8 autres n'ont pas été mesurées et sont supposées suivre le même patron.
- L'absence de GBP Rouen est déduite de l'absence de tout signal sur le site et des recherches effectuées — elle mérite une confirmation directe dans le compte Google.

---

## Voir aussi

- `docs/audit-proclean-2026-07.md` — audit SEO technique (bugs, duplicate content, Core Web Vitals)
- Skill `ai-seo` — analyse complète de visibilité IA (citabilité, llms.txt, mentions de marque)
