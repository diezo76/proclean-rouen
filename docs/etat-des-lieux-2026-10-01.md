# État des lieux — societe-nettoyage-rouen.fr

**Date de mesure** : 2026-10-01
**Périmètre** : site en ligne (40 URLs du sitemap), dépôt local `~/projets/ProClean/proclean-rouen/`, GitHub `diezo76/proclean-rouen`, Search Console (propriété `https://societe-nettoyage-rouen.fr/`), PageSpeed mobile, registre des entreprises.
**Mode** : lecture seule. Aucun fichier de code modifié, aucun commit, aucun déploiement.

---

## 1. Le constat principal : trois versions du site coexistent

| Où | Version | Contenu |
|---|---|---|
| **En ligne** (VPS Contabo) | build du **27 mars 2026** | Aucune correction de juillet |
| **GitHub / `main`** (HEAD `b6bfd3d`) | 14 août | Corrections techniques du 06/07 **présentes**, corrections de contenu du 07/07 **annulées** |
| **Dossier local** (non commité) | 7 juillet | Tout est là : corrections techniques + contenu |

### Preuves que la production date du 27 mars
- `sitemap.xml` en ligne : les 40 `lastmod` valent `2026-03-27T19:02:30Z` (le sitemap prend la date du build).
- Page `/nettoyage-bihorel` en ligne : **0** `BreadcrumbList` (ajouté le 06/07 dans le code).
- Accueil en ligne : image `newhero.jpg` (convertie en WebP le 06/07 dans le code).
- Page Diogène en ligne : « dans toute la métropole » ×4 (réécrit le 07/07 dans le code).
- Titres en ligne : « … | ProClean | ProClean Rouen » (doublon de marque toujours là).

**Conséquence : tout le travail de juillet (audit, quick wins, 20 intros réécrites, 40 liens internes) n'a eu aucun effet sur Google, puisqu'il n'a jamais été mis en ligne.**

### Le commit du 14 août a annulé les corrections de contenu
`16e7045` (« suppression pnpm-lock.yaml ») a embarqué, en plus du lockfile, un retour arrière de `content/rouen.ts`, `ZoneInterventionSection.tsx` et `docs/audit-proclean-2026-07.md`.

| Commit | « métropole » dans `content/rouen.ts` |
|---|---|
| `655ea00` (06/07) | 25 |
| `f57f979` (07/07, correction) | 0 |
| `16e7045` (14/08) | **25** ← retour arrière |
| Dossier local | 0 (identique à `f57f979`) |

Rien n'est perdu : les 3 fichiers « modifiés non commités » du dossier local **sont** les corrections. Il suffit de les recommiter. Cause probable : index git périmé hérité de l'incident iCloud.

---

## 2. Ce qui a été mis en place (et qui fonctionne en ligne)

- **40 pages indexables**, toutes en HTTP 200 : accueil, landing `/entreprise-nettoyage-rouen`, devis, 3 catégories, 20 services, 12 villes, 2 légales. 404 propre sur URL inexistante.
- **Stack** : Next.js 15.5 (App Router), React 19, Tailwind 3.4, Framer Motion, Nodemailer. VPS Contabo, Plesk + Nginx. 100 % statique sauf `/api/contact`.
- **SEO technique** : canonical auto-référent partout, `robots.txt` propre, sitemap, meta description unique par page, `lang="fr"`, 0 image sans `alt` sur l'accueil, vérification Search Console en place.
- **Données structurées** : `CleaningService`/`LocalBusiness` sur toutes les pages, `Service` + `BreadcrumbList` + `FAQPage` sur les services, `Organization` sur l'accueil. JSON-LD valide.
- **Contenu** : ~3 100 mots sur une page service, FAQ uniques par page, tarifs affichés, maillage services ↔ catégories ↔ villes.
- **Formulaire de devis** : 6 sections, honeypot, limitation de débit (5/h par IP), validation serveur, échappement HTML. Champs à 48 px et 16 px sur mobile (pas de zoom iOS).
- **Sécurité** : `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, HTTP → HTTPS en 301, certificat Let's Encrypt valide jusqu'au 24/11/2026.
- **Performance** : PageSpeed mobile **97/100** (LCP 2,6 s, CLS 0, TBT 30 ms), compression Brotli, images servies en AVIF par `next/image`.
- **Build local** : `npm run build` passe — 46 pages générées, 0 erreur (Next 15.5.20, Node 25.9).

---

## 3. Résultats Google (Search Console)

| Période | Clics | Impressions/jour (ordre de grandeur) |
|---|---|---|
| 27/03 → 30/06 | 9 | ~10 → ~25 |
| 01/07 → 28/09 | **42** | ~35 → ~50 |

- Les deux URLs inspectées (accueil, `/entreprise-nettoyage-rouen`) sont **indexées**, dernier passage de Google les 19 et 23/09.
- **Le trafic est surtout de la marque** : « pro clean nettoyage » (323 impr.), « pro clean nettoyage rouen » (214 impr., position 6,7), « proclean » (116 impr.).
- **La requête principale ne ressort pas** : « entreprise de nettoyage rouen » = **position 52,8** (192 impr., 0 clic) ; la landing dédiée est en position 63,6.
- Signaux encourageants sur la longue traîne : parking (pos. 11,7), camion (12,1), Maromme (12,0), Petit-Quevilly (14,4), Canteleu (15,3), Sotteville (17,7), Elbeuf (19,8, 115 impr.).
- Aucune donnée terrain Core Web Vitals : trafic réel insuffisant.

42 clics en 3 mois : le site est indexé et propre, mais il ne génère pas de demandes à ce stade.

---

## 4. Problèmes relevés (classés par gravité)

### Bloquants
1. **Production en retard de 6 mois sur le code** (cf. §1).
2. **Retour arrière du 14/08 dans git** (cf. §1) — à recommiter avant tout déploiement, sinon on déploie l'ancien contenu.
3. **Aucune mesure d'audience ni de conversion** : ni Analytics, ni Matomo, ni Plausible, ni suivi d'événement. On ne sait pas combien de devis le site a produits. Une panne du formulaire ne laisserait aucune trace.
4. **Réception des e-mails du formulaire : non mesurée.** Le code est correct, mais l'envoi dépend d'un mot de passe SMTP présent uniquement sur le serveur. Non testé (un test = envoyer une vraie demande).

### Importants
5. **`https://www.societe-nettoyage-rouen.fr` est cassé** : le certificat ne couvre que le domaine nu. `http://www` redirige vers `https://www`, qui affiche une alerte de sécurité.
6. **Affirmations non vérifiables affichées sur le site** : « 15+ ans d'expérience » alors que la société PROCLEAN (SIREN 937 516 003) a été **créée le 16/10/2024** ; « 530+ interventions » ; « 5/5 sur Google » sans nombre d'avis ; un seul témoignage (« Steven A. ») non sourcé. Risque de pratique commerciale trompeuse (L121-2) — à faire confirmer ou corriger par le client.
7. **Entreprise au Havre, site qui se présente comme rouennais** : adresse, SIRET et téléphone = Le Havre ; un seul établissement au registre. `proclean20.fr` écrit toujours que Rouen n'est desservi que « parfois ». Aucun lien entre les deux sites. Pas de fiche Google Rouen → pas d'accès au pack local (audit du 15/07, 35/100, toujours valable).
8. **HSTS absent en ligne** : le `nginx.conf` du dépôt le prévoit, le serveur ne l'envoie pas. Le fichier du dépôt n'est pas la configuration réellement active (Plesk).
9. **Mobile, page devis** : l'en-tête fixe (logo de 90 px) recouvre le titre de 37 px au chargement.

### À améliorer
10. Titres avec marque en double (« | ProClean | ProClean Rouen ») — le gabarit de `app/layout.tsx` ajoute un suffixe à des titres déjà suffixés.
11. H1 de l'accueil sans « Rouen ».
12. Pas de favicon, pas d'icône, **pas d'image de partage** (`og:image` absent, 404 sur `/favicon.ico`).
13. Schéma `LocalBusiness` incomplet : pas de `geo`, d'horaires, d'`image`, de `sameAs` ; `areaServed` figé sur « Rouen » même sur les pages villes.
14. Pages villes minces : **377 mots** balises comprises (Bihorel), unicité 45–55 % au test du 15/07.
15. Tout le contenu visible dépend de JavaScript : 38 à 50 blocs par page sortent du serveur en `opacity:0`, dont le H1 de l'accueil. Aucune prise en charge de `prefers-reduced-motion`.
16. 41 éléments cliquables sur 60 font moins de 44 px de haut sur l'accueil mobile (liens de menu et de pied de page principalement).
17. Structure « Étape 1/2/3 » identique sur les 20 pages services (`content/rouen-sections.ts`) — point D.6 de l'audit de juillet, jamais traité.
18. Dépôt : 8 fichiers/dossiers non suivis à la racine (`PASSATION-…`, `STRATEGIE-…`, `findings.md`, `progress.md`, `task_plan.md`, `.mulch/`, `graphify-out/`, audit SEO local). `graphify-out/` date du 12/04, périmé. `DEPLOY.md` cité dans `tasks/todo.md` est absent du dossier.

---

## 5. Écarts entre la documentation et la réalité

| Document | Ce qu'il dit | Réalité mesurée |
|---|---|---|
| Fiche vault `proclean-rouen.md` | « Déployé sur Contabo », quick wins et Phase D « réalisés » | Réalisés dans le code, **pas en ligne** |
| Fiche vault | Headers de sécurité dont HSTS | HSTS absent en ligne |
| `CLAUDE.md` projet | Rate limiting « 5 envois/minute » | Code : 5 par **heure** |
| `CLAUDE.md` projet | `public/favicon.ico`, logos `.webp` | Pas de favicon ; logos en `.png` |
| `CLAUDE.md` projet | Arborescence sans pages villes ni `components/templates/` | 12 pages villes + 2 gabarits existent |
| Audit SEO local | « 28 pages service » | 20 services + 3 catégories + 1 landing |
| `docs/audit-proclean-2026-07.md` (version commitée) | Intros de zone « non touché » | Version locale : « fait » — c'est le retour arrière du 14/08 |

---

## 6. Ordre de travail recommandé

1. **Recommiter** les 3 fichiers locaux (rétablit les corrections du 07/07 sur GitHub).
2. **Déployer** sur le VPS, puis vérifier en ligne : `lastmod` du sitemap, `BreadcrumbList` sur une page ville, absence de « métropole ».
3. **Tester le formulaire** de bout en bout avec le client (une vraie demande, e-mail reçu ou non).
4. **Installer une mesure** d'audience et de conversion (clic téléphone + envoi du formulaire).
5. **Réparer `www`** (certificat couvrant les deux noms) et activer HSTS côté Plesk.
6. **Faire valider par le client** les chiffres affichés (15 ans, 530 interventions, 5/5).
7. **Trancher Le Havre ↔ Rouen** (options A/B/C de l'audit du 15/07).
8. Ensuite seulement : titres en double, H1, favicon/`og:image`, schéma, pages villes, structure des pages services.

**Le réseau de 19 autres villes ne doit pas être lancé avant les points 1 à 7** : le gabarit dupliquerait ses défauts 19 fois.

---

## 7. Ce qui n'a pas été mesuré

- État réel du serveur (PM2, version de Node, commit déployé, fichier `.env`) : pas d'accès SSH utilisé.
- Envoi effectif des e-mails du formulaire.
- Rendu visuel des animations sur un vrai téléphone (le navigateur de test était en arrière-plan, animations figées).
- Positions dans le pack local, backlinks, citations d'annuaires.
- Indexation des 38 autres URLs (2 inspectées sur 40).
- Fiche Google Business Profile du Havre (nombre d'avis réel).

---

## 8. Suite donnée le 2026-10-01 (soir)

**Fait et poussé sur `main` (`6a0c686`)** :
- corrections de contenu du 07/07 rétablies (`8ce733f`, identiques à `f57f979`) ;
- titres sans doublon de marque, `og:image`, icônes, schéma `LocalBusiness` (`@id`, `image`, `areaServed` par ville), `prefers-reduced-motion`, en-tête mobile qui ne recouvre plus le H1 (devis + 2 pages légales).

**Toujours pas en ligne** : le déploiement n'a pas été fait. Tant qu'il ne l'est pas, la production reste le build du 27 mars.

**Reste ouvert** : déploiement, certificat `www` + HSTS, test réel du formulaire, mesure d'audience, validation client des chiffres affichés, décision Le Havre ↔ Rouen, 21 titres de plus de 60 caractères, H1 d'accueil, `geo`/horaires du schéma, pages villes, structure « Étape 1/2/3 ».

### Déploiement effectué le 2026-10-01 (soir)

Serveur passé de `18c50c6` (27/03) à `2cb110b`. Vérifié depuis l'extérieur après redémarrage :
- sitemap : 40 `lastmod` au 2026-10-01, 40 URLs en 200 ;
- page Bihorel : `BreadcrumbList` présent, `areaServed` = Bihorel ;
- page Diogène : 0 « dans toute la métropole », nouvelle intro avec liens villes ;
- accueil : `newhero.webp`, `og:image` présent ; `/icon.png` et `/apple-icon.png` en 200 ;
- titres : plus de marque en double.

Relevé pendant le déploiement : le serveur tourne en **Node 18.20.8** (fin de support, une dépendance de lint réclame Node 20+), `npm audit` signale **9 vulnérabilités** (1 critique, 7 élevées), un `.env.local` est bien présent. Un `package-lock.json` local au serveur bloquait `git pull` ; il a été renommé en `package-lock.json.bak-20261001`.

Toujours ouvert côté serveur : certificat `www`, HSTS, mise à jour de Node.

### Suite du 2026-10-01 (nuit) — formulaire, sécurité, ancienneté

- **Formulaire en panne depuis l'origine** : le journal serveur compte 20 échecs d'envoi (essais du 01/10 compris), tous en `EAUTH 535` chez `smtp.gmail.com`. Cause : la messagerie de proclean20.fr est chez Hostinger (MX `mx1/mx2.hostinger.com`), le code visait Gmail. Corrigé : hôte et port lus dans l'environnement (`EMAIL_HOST`, `EMAIL_PORT`, défaut Hostinger 465). **Reste à saisir sur le serveur l'adresse et le mot de passe d'une boîte Hostinger existante, puis à tester un envoi réel — non vérifié à ce stade.**
- **Next 15.5.27** déployé (faille critique). Restent 4 failles élevées (sharp, nodemailer, postcss, nanoid) : leurs correctifs exigent Node 20+, le serveur est en Node 18.20.8.
- **Ancienneté retirée** (décision du 01/10) : « 15+ ans », « plus de 12 ans » ×3, « depuis 2020 » ×3, « milliers de matelas ». Pastille d'accueil remplacée par « 20 services proposés ».
- **Positionnement** (décision du 01/10) : siège au Havre, site ciblant Rouen. « installation rouennaise » et « équipe rouennaise » retirés ; adresse du Havre conservée en pied de page et mentions légales.
- Vérifié en ligne après déploiement de `c0295a3` : 40 URLs en 200, aucune des mentions retirées sur les 7 pages concernées.
- Toujours ouvert : `https://www` (certificat) et HSTS, mot de passe SMTP + test réel, mesure d'audience, Node 20+ sur le serveur, « 530+ interventions » / « 98 % » / « 5/5 sur Google » non prouvés, discours de proclean20.fr (« parfois jusqu'à Rouen »).

### Formulaire réparé le 2026-10-01 (nuit)

- Le serveur portait encore le mot de passe d'exemple, puis une boîte `noreply@proclean20.fr` qu'Hostinger refusait. Adresse d'envoi passée sur `contact@proclean20.fr` (décision du 01/10), ancien fichier conservé sur le serveur en `.env.local.bak-20261001`.
- Test réel via `/api/contact` : **HTTP 200, `success: true`** — Hostinger a accepté l'envoi (message intitulé « TEST technique - ne pas traiter »).
- **Non vérifié** : l'arrivée effective du message dans la boîte `contact@proclean20.fr` (à contrôler par le destinataire, indésirables compris).
