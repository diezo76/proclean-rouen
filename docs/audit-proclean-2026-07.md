# Audit complet — societe-nettoyage-rouen.fr
**Date** : 2026-07-06
**Périmètre** : 41 URLs (20 pages services + 12 pages villes + 1 landing entreprise + devis + homepage + particuliers/professionnels + tissus-ameublement + 2 pages légales)
**Mode** : lecture seule, aucune modification effectuée.

> ⚠️ **État du dépôt git** : au démarrage de cet audit, 184 fichiers du repo étaient indexés comme "supprimés" (`git status` → `deleted:` sur quasi tout le projet, y compris `CLAUDE.md`, `app/layout.tsx`, etc.) alors qu'ils existent bien sur le disque. Cet état est antérieur à cette session et n'a pas été touché — à vérifier de ton côté (`git status` / `git reset`) avant tout commit. Cet audit s'appuie uniquement sur les fichiers présents sur le disque, qui sont intacts.
> **Mise à jour 2026-07-06 (session corrections)** : cet état anormal a disparu depuis, `git status` est propre.

## ✅ CORRECTIONS APPLIQUÉES (session du 2026-07-06, post-audit)

- [x] **Phase B.3 — BreadcrumbSchema villes** : ajouté dans `components/templates/VilleTemplate.tsx` (un seul fichier, propagé aux 12 pages villes). Fil d'Ariane `Accueil > Nettoyage à [Ville]`, conforme à `STRATEGIE-PAGES-LOCALES-PROCLEAN.md`. Vérifié dans le HTML généré (Sotteville, Elbeuf).
- [x] **Phase B.1 — Métadonnées trop longues** : titre `/nettoyage-saint-etienne-du-rouvray` (61→47c), description homepage (160→142c), description `/entreprise-nettoyage-rouen` (156→146c), description `/nettoyage-saint-etienne-du-rouvray` (157→138c).
- [x] **Phase B.2 — Images WebP** : 11 images converties (cwebp qualité 58-85 selon densité de détail), toutes <150 Ko. Originaux JPG archivés dans `public/images/_originals/` (non référencés, à supprimer après vérification visuelle).
- [x] **Hygiène repo** : suppression de 2 doublons d'images non référencés (`content-entretien-immeubles-rouen 2.jpg`/`3.jpg`) ; `package-lock.json` ajouté au suivi git (n'était pas ignoré mais jamais commité).
- [x] **Phase D.4/D.5 — Diversification des 20 intros de zone + réduction densité "métropole"/"patrimoine"** : 20 intros réécrites avec 40 liens internes vers les city hubs (2/intro), "métropole" éliminé, "patrimoine/patrimonial" ramené à 2 occurrences légitimes (session du 2026-07-07).
- [~] **Phase D.9 — Maillage interne services → villes** : partiel, via les 20 intros de zone (voir ci-dessus). Reste à traiter le maillage depuis le corps des pages services.
- [ ] **Non touché (session séparée prévue)** : structure "Étape 1/2/3" identique de `rouen-sections.ts` — voir Phase D point 6.

---

## VERDICT PHASE C — Risque duplicate/thin content : **MOYEN** (score 6,5/10, escalade possible vers ÉLEVÉ)

| Zone | Risque | Raison |
|---|---|---|
| **12 pages villes** | 🟢 Faible | Contenu géo-spécifique réel (quartiers, chiffres locaux), FAQ 100% uniques (36/36, zéro doublon exact) |
| **20 pages services** | 🔴 Élevé | Phrase d'intro de zone quasi-identique répétée sur les 20 pages ("Nous intervenons pour le nettoyage de [X] dans toute la métropole...") ; structure de sections générée par script identique partout (Étape 1/2/3…) |
| Sur-optimisation mots-clés | 🟡 Moyen | "métropole" : 27 occurrences, "patrimoine" : 12 occurrences — densité artificiellement élevée |
| AI-watermark | 🟢 Faible | Zéro "il est important de", "n'hésitez pas à", "véritablement" — contenu rédigé humainement |
| Méthode de génération | 🟡 Moyen | Contenu produit par des scripts Python de batch (`scripts/seo-lot*.py`, `scripts/seo-phase-b*.py`) → pattern d'uniformité structurelle détectable par Google, même si le texte final est correct |

**Le point qui compte le plus avant de dupliquer vers 19 autres villes** : ce ne sont pas les pages villes qui posent problème (elles sont bien différenciées), ce sont les **20 pages services**, dont l'intro et la structure de sections sont quasi calquées les unes sur les autres. Ce gabarit sera réutilisé tel quel sur 19 autres domaines → risque de multiplier une faiblesse déjà présente par 19, ce qui peut basculer le risque de MOYEN à ÉLEVÉ à l'échelle du réseau.

### Preuves concrètes
- `content/rouen.ts` — paragraphe "zone" quasi-identique sur les 20 services :
  - L.268 (Diogène) : *"Nous opérons pour le nettoyage syndrome de Diogène dans toute la métropole."*
  - L.449 (Bureaux) : *"Nous intervenons pour le nettoyage de bureaux dans toute la métropole rouennaise."*
  - L.551 (Canapé) : *"Nous intervenons pour le nettoyage de canapés dans toute la métropole rouennaise."*
  - Répartition : 11 pages avec "Nous intervenons pour le nettoyage de X", 4 avec "Nous intervenons pour l'entretien de X", 2 avec "Nous opérons pour le nettoyage de X", 2 variantes minimes.
- `content/rouen-sections.ts` (3311 lignes, auto-généré) : chaque service suit la même architecture en 6 étapes numérotées, mêmes phrases de transition ("On vient avec tout notre matériel : aspirateur pro, injecteur-extracteur…", "Ce qu'on peut faire en plus :").
- `data/cities.ts` : motif "les particuliers nous appellent surtout pour les canapés/matelas/fin de bail" répété sur 7 des 12 villes (58% de couverture), et le motif "la mousse" (climat humide) sur 4 villes — répétition de mots-clés mais contextualisée différemment à chaque fois (positif).
- Scripts détectés dans `/scripts/` : `seo-phase-b.py`, `seo-lot2-*.py`, `seo-lot3-*.py`, `seo-lot4-*.py`, `seo-fix-missing-bolds.py`, `seo-audit-all.py` — confirment une génération/modification de contenu par automatisation.

### Recommandation prioritaire
Avant de cloner ce template vers les 19 autres villes du réseau : diversifier les 20 intros de zone (4-5 variantes au lieu d'1 seule répétée), réduire "métropole" (27→~12) et "patrimoine" (12→~6), et casser la structure "Étape 1/2/3" identique dans `rouen-sections.ts` avec de la variété par catégorie de service.

---

## PHASE A — Inventaire des routes

39 dossiers de routes sous `app/` (+ `app/api/contact`) + page racine = **41 URLs publiques**, réparties ainsi :

| Type | Nombre | Source de contenu |
|---|---|---|
| Homepage | 1 | `content/rouen.ts` |
| Landing entreprise | 1 (`entreprise-nettoyage-rouen`) | contenu dédié |
| Devis | 1 (`devis-gratuit-rouen`) | `components/forms/ContactForm.tsx` |
| Catégories | 3 (`particuliers`, `professionnels`, `nettoyage-tissus-ameublement`) | `data/services.ts` (filtré par catégorie) |
| Pages services | 20 | `content/rouen.ts` + `content/rouen-sections.ts`, définis dans `data/services.ts` (Tissus & Ameublement : 4, Particuliers : 9, Professionnels : 7) |
| Pages villes | 12 | `data/cities.ts` (page.tsx + VilleContent.tsx par ville) : Sotteville-lès-Rouen, Saint-Étienne-du-Rouvray, Grand-Quevilly, Petit-Quevilly, Mont-Saint-Aignan, Bois-Guillaume, Canteleu, Maromme, Déville-lès-Rouen, Darnétal, Bihorel, Elbeuf |
| Légales | 2 (`mentions-legales`, `politique-de-confidentialite`) | contenu statique |
| API | 1 (`api/contact`, non indexable) | `app/api/contact/route.ts` |

### Build
`npm run build` : dépendances absentes au départ (`node_modules` manquant), réinstallées via `npm install` (362 packages, `node_modules/.bin` non généré — le binaire `next` a dû être invoké via `node node_modules/next/dist/bin/next build`).

**Le build reste bloqué indéfiniment** à l'étape "Creating an optimized production build ..." (testé deux fois, dont une avec `NEXT_TELEMETRY_DISABLED=1`, plus de 20 min sans avancer). Diagnostic via `sample`/`lsof` sur les processus : le worker de compilation (`jest-worker/processChild.js`) est bloqué dans une boucle de microtasks JS en train de résoudre des appels `fs.stat` en cascade — signature typique d'une résolution de module (webpack/next/font ou watcher de fichiers) qui tourne en rond dans l'environnement sandboxé de cette session, plutôt qu'un vrai bug du code. Ce n'est **pas concluant sur la qualité du code** — juste une limitation de l'environnement d'exécution de cet audit.
**Action requise** : lance `npm run build` toi-même dans ton Terminal local pour confirmer que le build passe (comme anticipé dans la consigne initiale). Je n'ai pas pu valider ce point depuis cette session.

> **Mise à jour 2026-07-06** : `npm run build` a été relancé lors de la session de corrections et **a abouti sans erreur** (exit code 0, 46 pages générées, cf. tableau de routes complet dans les logs de build). Le hang précédent ne s'est pas reproduit.

### Sitemap vs build
`app/sitemap.ts` génère dynamiquement : 8 pages statiques + 20 services (`data/services.ts`) + 12 villes (`data/cities.ts`) = **40 URLs + racine = 41**. Correspond exactement aux 41 routes trouvées dans `app/`. **Aucun écart.**

---

## PHASE B — Bugs techniques

### 🟢 Aucun problème critique détecté
- **Liens internes** : 0 lien cassé. Tous les hrefs vers services/villes/pages statiques correspondent à une route existante.
- **Images référencées** : 0 image manquante. Les 20 `heroImage` + 20 `contentImage` de `data/services.ts` existent toutes sur disque.
- **robots.txt** (`app/robots.ts`) : conforme — `disallow: ['/api/', '/_next/', '/admin/']`, sitemap référencé correctement.
- **Canonical URLs** : présentes et correctes sur toutes les pages échantillonnées, via `generatePageMetadata()` dans `lib/seo.ts` (`alternates.canonical`).
- **Métadonnées** : aucun titre ou description dupliqué entre les 46 pages.

### 🟡 Moyen
1. **Titres/descriptions légèrement longs** (tolérable) :
   - `/nettoyage-saint-etienne-du-rouvray` : titre 61 caractères (nom de ville long, difficilement compressible)
   - Homepage : description 160 caractères
   - `/entreprise-nettoyage-rouen` : description 156 caractères
   - `/nettoyage-saint-etienne-du-rouvray` : description 157 caractères
2. **Poids des images** — 11 fichiers dépassent 200 Ko, tous en JPG (devraient être en WebP) :
   | Fichier | Poids |
   |---|---|
   | hero/newhero.jpg | 412 Ko |
   | hero-nettoyage-moquette-rouen.jpg | 417 Ko |
   | hero-nettoyage-tapis-rouen.jpg | 380 Ko |
   | hero-nettoyage-terrasse-rouen.jpg | 328 Ko |
   | hero-nettoyage-vitres-rouen.jpg | 278 Ko |
   | hero-debarras-maison-rouen.jpg | 253 Ko |
   | content-nettoyage-toiture-rouen.jpg | 235 Ko |
   | hero-nettoyage-toiture-rouen.jpg | 235 Ko |
   | hero-entretien-commerces-rouen.jpg | 228 Ko |
   | hero-nettoyage-voiture-rouen.jpg | 216 Ko |
   | hero-nettoyage-parking-rouen.jpg | 213 Ko |

   Seuls 8 fichiers sur ~53 sont en WebP — la majorité des images du site sont en JPG/PNG non optimisé.
3. **Schema JSON-LD manquant sur les 12 pages villes** : `BreadcrumbSchema` n'est jamais importé/rendu dans le template ville (contrairement aux pages services et légales qui l'ont). Les pages villes ont `LocalBusinessSchema` + `FAQSchema` mais pas de fil d'Ariane structuré.

---

## PHASE D — Recommandations (par impact décroissant)

### Quick wins techniques (une session)
1. Ajouter `<BreadcrumbSchema />` aux 12 pages villes (template unique à modifier, propagé automatiquement).
2. Convertir les 11 images >200 Ko en WebP et viser <150 Ko pour les heroes (gain Core Web Vitals direct, `next/image` déjà en place donc juste le remplacement des sources).
3. Raccourcir les 3 descriptions >155 caractères et le titre 61 caractères.

### Contenu — priorité avant duplication du template
4. [x] **Diversifier les 20 intros de zone des pages services** (le point le plus impactant de tout l'audit) — remplacer la phrase unique "Nous intervenons pour le nettoyage de X dans toute la métropole" par 4-5 variantes selon la catégorie de service. *Fait le 2026-07-07 : 20 intros réécrites, 40 liens internes vers les villes (2/intro, 3-4 occurrences par ville).*
5. [x] Réduire la densité de "métropole" (27→~12) et "patrimoine" (12→~6) dans `content/rouen.ts`. *Fait le 2026-07-07 : "métropole" éliminé (0 occurrence), "patrimoine/patrimonial" ramené à 2 occurrences légitimes.*
6. Casser la structure "Étape 1/2/3" identique de `content/rouen-sections.ts` : varier le nombre d'étapes et les titres de section par service.

### SEO local — ce qui manque
7. Aucune stratégie d'avis clients visible dans le code (pas de composant Testimonials connecté à des avis Google réels, ni de lien Google Business Profile trouvé dans `data/siteConfig.ts` — à vérifier/ajouter).
8. Zone géographique : le contenu hyper-local est bon sur les FAQ villes mais pourrait être renforcé sur les pages services (actuellement génériques "métropole").

### Maillage interne
9. [~] Les 12 pages villes sont bien maillées entre elles (villes voisines) mais gagneraient à recevoir plus de liens entrants explicites depuis les pages services (actuellement le lien se fait presque uniquement homepage → villes). *Partiel le 2026-07-07 : les 20 intros de zone des pages services lient maintenant vers 2 city hubs chacune (40 liens). Reste à faire : maillage depuis le corps des pages services (hors bloc zone).*

---

## Notes méthodologiques
- Phase B et Phase C ont été confiées à deux agents de lecture indépendants (aucune modification) pour couvrir l'ensemble du code en parallèle ; leurs constats ont été vérifiés avant intégration dans ce rapport.
- `npm run build` n'a pas pu être validé dans cette session (hang reproductible, voir Phase A) — à relancer manuellement dans ton Terminal.
