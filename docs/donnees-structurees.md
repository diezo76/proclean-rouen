# Données structurées (JSON-LD)

Refonte du 2026-10-02. Tout est produit par `lib/schema.ts` et émis par `components/schema/JsonLd.tsx`.

## Règles strictes

1. **Aucun avis dans le JSON-LD** : pas de `aggregateRating`, `review`, `ratingValue`, ni de note « 5/5 ». Des avis auto-attribués exposent à une pénalité Google.
2. **Aucune adresse à Rouen.** L'adresse est celle du siège : 7 Rue Washington, 76600 Le Havre.
3. **Aucun lien vers `proclean20.fr`**, dans `sameAs` ou ailleurs. Seule l'adresse e-mail `contact@proclean20.fr` est déclarée.
4. **Chaque prix déclaré correspond exactement au texte visible de la page.** Un prix qui ne se lit pas sans ambiguïté n'est pas déclaré.
5. **Uniquement des types qui existent dans schema.org.** `CleaningService` n'existe pas (rejeté par validator.schema.org, 404 sur schema.org) : il a été retiré le 02/10/2026 alors qu'il était en ligne depuis mars.
6. **Une seule entité entreprise**, identique sur toutes les pages. Aucune propriété ne change selon la page.

## Données de l'entreprise

Vérifiées sur la fiche Google Business le 02/10/2026, saisies une seule fois dans `data/siteConfig.ts`.

| Donnée | Valeur | Source |
|---|---|---|
| Nom | ProClean | fiche Google |
| Adresse | 7 Rue Washington, 76600 Le Havre | fiche Google |
| Téléphone | +33749130683 | fiche Google |
| Horaires | 24h/24, 7j/7 (`00:00`-`23:59`) | fiche Google |
| SIREN / SIRET / NAF | 937516003 / 93751600300012 / 81.21Z | annuaire officiel |
| Coordonnées GPS | 49.501492, 0.140254 | api-adresse.data.gouv.fr (score 0,978) |
| `sameAs` | `https://maps.google.com/?cid=8852710617108011228`, `https://annuaire-entreprises.data.gouv.fr/entreprise/937516003` | fournis par le client |

## L'entité entreprise

`buildBusiness()` → `@type ["LocalBusiness","Organization"]`, `@id` = `BUSINESS_ID` (`https://societe-nettoyage-rouen.fr/#business`).

Propriétés : `name`, `legalName`, `url`, `telephone`, `email`, `logo`, `image`, `address`, `geo`, `openingHoursSpecification`, `identifier` (SIRET), `sameAs`, `contactPoint`, `paymentAccepted`, `priceRange`, `areaServed`.

`areaServed` = 14 villes : Rouen, les 12 villes de `data/cities.ts` (nom exact), Le Havre. Ajouter une ville à `data/cities.ts` l'ajoute automatiquement.

Elle apparaît **complète une fois par page**. Partout ailleurs (`Service.provider`), seule la référence `{ "@id": BUSINESS_ID }` est écrite.

## Un bloc par page

Chaque page émet un seul `<script type="application/ld+json">` au format `{ "@context": "https://schema.org", "@graph": [...] }`.

| Pages | Contenu du `@graph` | Où c'est émis |
|---|---|---|
| Accueil | entreprise, FAQ | `app/page.tsx` |
| Entreprise de nettoyage | entreprise, FAQ | `app/entreprise-nettoyage-rouen/page.tsx` (questions dans `faq.ts`) |
| 20 services | entreprise, service (+ offres), fil d'Ariane, FAQ | `components/templates/ServicePageTemplate.tsx` |
| 12 villes | entreprise, service ville, fil d'Ariane, FAQ | chaque `app/nettoyage-<ville>/page.tsx` via `cityPageNodes()` |
| Devis, 3 catégories, 2 pages légales | entreprise, fil d'Ariane | la page elle-même |

Le JSON-LD est toujours émis par un composant **serveur**. `VilleTemplate` et `EntrepriseNettoyageContent` sont des composants client : y importer `lib/schema.ts` enverrait la liste des villes au navigateur.

## Pages services

`buildService(service, content)` → `Service` avec `@id` `<url>#service`, `name`, `serviceType`, `description`, `url`, `image` (couverture), `provider` (référence), `areaServed` (14 villes).

Si `content.pricing` existe, `hasOfferCatalog` contient un `Offer` par ligne : `itemOffered.name` = libellé exact, `priceSpecification` en EUR.

Seules 6 pages ont une grille : Diogène (4 lignes), après-travaux (4), lustre (5), après-déménagement (6), appartement (6), terrasse (6) — **31 offres, toutes déclarées**. Les 14 autres pages n'ont pas de catalogue : leurs prix n'existent que dans le texte courant.

### Parseur de prix (`parsePrice`)

| Texte visible | Déclaré |
|---|---|
| `115€ - 175€` | `minPrice` 115, `maxPrice` 175 |
| `9€ - 14€/m²` | `minPrice` 9, `maxPrice` 14, `unitText` « m² » |
| `900€ - 1.400€` | `minPrice` 900, `maxPrice` 1400 |
| `35€` | `price` 35 |
| `à partir de 28€/séance` | `minPrice` 28, `unitText` « séance » |

Il renvoie `null` dès qu'il reste autre chose que des montants dans le texte : la ligne est alors ignorée, jamais devinée. Avec une unité, le type est `UnitPriceSpecification`, sinon `PriceSpecification`.

## Pages villes

`buildCityService(city)` → `Service` nommé « Nettoyage professionnel à <Ville> », `areaServed` = la ville seule, `hasOfferCatalog` listant `city.services` (nom + URL absolue de la page service). Aucun prix n'y est déclaré.

## Contrôle

Après chaque `npm run build` :

```bash
python3 scripts/check-jsonld.py
```

Le script lit le HTML généré des 40 pages et échoue (code de sortie 1) si une règle est violée : un seul bloc par page, JSON valide, une seule entité complète, références `@id` toutes résolues, adresse déclarée une seule fois et au Havre, aucun terme interdit, aucune URL `proclean20.fr`, et pour chaque ligne de prix : même libellé, mêmes montants, même unité que la grille, texte présent dans la page.

Résultat du 02/10/2026 : 40 pages, 31 offres, 0 anomalie.

Validation externe : le service de validator.schema.org a renvoyé **0 erreur, 0 avertissement** sur `/`, `/nettoyage-canape-rouen`, `/nettoyage-diogene-rouen`, `/nettoyage-sotteville-les-rouen`, `/nettoyage-appartement-rouen`, `/nettoyage-terrasse-rouen` et `/devis-gratuit-rouen`. Ce validateur ne lit pas une adresse locale : on lui envoie le code de la page.

## FAQ corrigées le 02/10/2026

Les réponses de FAQ sont reprises telles quelles dans le nœud `FAQPage` : une FAQ fausse devient une donnée structurée fausse.

| Page | Avant | Après | Grille |
|---|---|---|---|
| Diogène | Entre 1 500€ et 8 000€ | Entre 900€ et 8 500€ | 900€ à 8.500€ |
| Après-travaux | Entre 9€ et 22€/m² | Entre 9€ et 28€/m² | 9€ à 28€/m² |

## Incohérences connues, non corrigées (à arbitrer avec le client)

Écarts entre une FAQ et le texte courant de sa page — on ne sait pas quel chiffre est le bon :

- **Vitres** : FAQ « 3€ à 8€ par vitre standard », « 60€ à 120€ pour 10 fenêtres » ; corps de page « Fenêtre standard (1m²) : 9€ à 13€ ».
- **Toiture** : FAQ « 15€ à 30€/m², hydrofuge inclus » ; corps de page 9-16€/m² + 6-9€/m², soit 15 à 25€/m².
- **Elbeuf** : une réponse de FAQ parle d'« un forfait déplacement de 20€ », le site répète « sans frais de déplacement ».
