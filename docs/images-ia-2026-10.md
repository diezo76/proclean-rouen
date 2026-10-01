# Images générées par IA — lot du 2026-10-01

## Règle d'usage

**Images IA = illustrations, jamais présentées comme notre équipe réelle.**

- Pas de « technicien ProClean », « notre équipe », « chantier réalisé à… » dans les alts, légendes ou textes voisins.
- L'arrière-plan (cathédrale, toits) évoque Rouen sans être une vue réelle : ne jamais le présenter comme une photo prise sur place.
- L'image doit montrer la méthode que la page décrit. Une image qui contredit le texte se refuse, même belle.
- Toute image publiée est débarrassée de ses métadonnées (C2PA, JUMBF, EXIF).
- Jamais d'image IA pour un témoignage, un avant/après ou une preuve de résultat.

## Images posées

| Source (`~/Downloads`) | Destination | Dimensions | Ancien poids | Nouveau poids | Alt |
|---|---|---|---|---|---|
| Salon lumineux avec vue sur la ville.png | `public/images/cta/nettoyage-vitres-appartement-rouen.webp` | 1200×676 | 93,5 Ko (`cta-cleaner.webp`) | 93,7 Ko | Technicien nettoyant les vitres d'un salon à colombages à Rouen |
| Nettoyage élégant d’un appartement parisien.png | `public/images/hero/nettoyage-appartement-rouen-hero.webp` | 1536×1024 | 146,1 Ko (`newhero.webp`) | 93,5 Ko | Nettoyage professionnel d'un appartement lumineux à Rouen |
| Nettoyage lumineux dans un bureau moderne.png | `public/images/services/service-circle-1.webp` | 800×534 | 32,0 Ko | 41,2 Ko | Nettoyage de bureaux professionnels à Rouen (inchangé) |
| Nettoyage professionnel dans un appartement français.png | `public/images/services/service-circle-2.webp` | 800×534 | 43,1 Ko | 36,3 Ko | Nettoyage après travaux à Rouen (inchangé) |
| Nettoyage professionnel d’un tapis de bureau.png | `public/images/services/content-nettoyage-moquette-rouen.webp` | 1200×800 | 144,0 Ko (`.jpg`) | 94,4 Ko | Injection-extraction sur une moquette de bureau à Rouen |
| Nettoyage d’un distributeur en entreprise.png | `public/images/services/content-nettoyage-distributeurs-rouen.webp` | 1200×800 | 78,8 Ko (`.jpg`) | 58,1 Ko | Désinfection d'un distributeur automatique en entreprise à Rouen |
| (dérivée du hero) | `public/images/og.jpg` | 1200×630 | 145,5 Ko | 148,1 Ko | — (image de partage) |

Conversion : `cwebp -q 82 -metadata none -resize <largeur> 0`. Toutes sous 150 Ko à la qualité 82, aucun palier de baisse nécessaire.
Le hero sort à 1536 px et non 1920 : la source fait 1536 px, elle n'a pas été agrandie.

## Contrôle des métadonnées

- Sources PNG : 24 à 27 occurrences `c2pa|jumbf|exif` chacune.
- Les 6 WebP : `strings … | grep -ci -E "c2pa|jumbf|exif"` = 0, et `webpmux -info` ne liste aucun bloc EXIF, XMP ou ICC.
- `og.jpg` : l'outil de conversion macOS (`sips`) réinjecte un bloc EXIF de 76 octets (dimensions seulement) ; il a été retiré, contrôle = 0.

## Image écartée

**Nettoyage sécurisé d’un toit en ardoise.png** — non posée. Elle montre un technicien debout sur les ardoises avec une lance à pression, alors que la page `/nettoyage-toiture-rouen` écrit « On ne monte pas sur votre toit avec un Kärcher à fond » et « Pas de karcher haute pression qui casse les tuiles et décolle les ardoises ». L'image `hero-nettoyage-toiture-rouen.webp` existante est conservée. À régénérer avec une scène cohérente (basse pression, brosse ou perche).

## Détails d'intégration

- `FAQBentoSection` affiche l'image « salon » dans un cadre portrait 280×420 : `object-[78%_center]` garde le technicien dans le cadre (au centre, il en sortait et l'alt devenait faux).
- Alt des images de contenu : champ optionnel `contentImageAlt` sur `ServiceDefinition` (`types/index.ts`), lu en priorité par `ServicePageTemplate`. Repli : `<titre> à Rouen — ProClean`.
- Anciennes images archivées dans `public/images/_originals/2026-10-01/` (dossier ignoré par git).
- `service-circle-1.webp` et `service-circle-2.webp` gardent leur nom : vider `.next/cache/images` après déploiement si l'ancienne image persiste.

---

# Lot 2 — couverture canapé et images FAQ (2026-10-01, soir)

## Images posées

Toutes dans `public/images/services/`. Conversion `cwebp -q 82 -metadata none`, aucune baisse de qualité nécessaire. Contrôle métadonnées = 0 sur les 12 fichiers (`strings` et `webpmux -info`).

| Source (`~/Downloads`) | Destination | Dimensions | Poids | Alt | Affichage |
|---|---|---|---|---|---|
| Nettoyage professionnel d’un canapé lumineux.png | `hero-nettoyage-canape-rouen.webp` | 1200×800 | 90,5 Ko (ancien `.jpg` : 138,0 Ko) | titre de la page (inchangé) | couverture |
| Nettoyage professionnel du canapé.png | `faq-nettoyage-canape-rouen.webp` | 560×840 | 37,4 Ko | Brossage d'un coussin de canapé après nettoyage à Rouen | bloc FAQ du contenu |
| Nettoyage professionnel d’un tapis fleuri.png | `faq-nettoyage-tapis-rouen.webp` | 560×840 | 70,4 Ko | Contrôle des fibres d'un tapis en laine après nettoyage à Rouen | bloc FAQ du contenu |
| pc-faq-moquette.png.png | `faq-nettoyage-moquette-rouen.webp` | 560×840 | 55,4 Ko | Shampouineuse professionnelle dans un couloir de bureaux moquetté à Rouen | bloc FAQ du contenu |
| pc-faq-matelas.png | `faq-nettoyage-matelas-rouen.webp` | 560×840 | 33,8 Ko | Aspiration anti-acariens d'un matelas à Rouen | bloc FAQ du contenu |
| pc-faq-diogene.png | `faq-nettoyage-diogene-rouen.webp` | 560×840 | 25,2 Ko | Technicien en combinaison de protection évacuant des déchets à Rouen | à gauche de l'accordéon |
| pc-faq-apres-travaux.png | `faq-nettoyage-apres-travaux-rouen.webp` | 560×840 | 27,4 Ko | Retrait des traces de peinture sur une fenêtre après travaux à Rouen | à gauche de l'accordéon |
| pc-faq-lustre.png | `faq-nettoyage-lustre-rouen.webp` | 560×840 | 49,6 Ko | Nettoyage des pampilles en cristal d'un lustre à Rouen | à gauche de l'accordéon |
| pc-faq-apres-demenagement.png | `faq-nettoyage-apres-demenagement-rouen.webp` | 560×840 | 23,8 Ko | Nettoyage des placards de cuisine après un déménagement à Rouen | à gauche de l'accordéon |
| pc-faq-debarras.png | `faq-debarras-maison-rouen.webp` | 560×840 | 42,6 Ko | Évacuation de cartons lors d'un débarras de maison près de Rouen | à gauche de l'accordéon |
| pc-faq-appartement.png | `faq-nettoyage-appartement-rouen.webp` | 560×840 | 28,3 Ko | Nettoyage du plan de travail d'une cuisine d'appartement à Rouen | à gauche de l'accordéon |
| pc-faq-voiture.png | `faq-nettoyage-voiture-rouen.webp` | 560×840 | 39,8 Ko | Aspiration des sièges arrière d'une voiture à Rouen | à gauche de l'accordéon |

## Où s'affiche l'image FAQ

Deux gabarits de FAQ coexistent sur les pages services :

- **Bloc FAQ du contenu** (`FAQBentoSection`, fond sombre, 6 questions autour d'une image) : présent sur 6 pages seulement — canapé, tapis, moquette, matelas, distributeurs, camion. Il dépend d'un titre « Foire aux questions » dans `content/rouen-sections.ts`.
- **Accordéon** (`FAQSection`) : présent sur les 20 pages.

Règle codée dans `ServicePageTemplate` (détection : `hasFAQBento` dans `lib/faq.ts`) :

1. La page a un bloc FAQ du contenu → l'image y va. Sans `faqImage`, repli sur la couverture (`heroImage`, alt = titre du service).
2. Sinon, si `faqImage` existe → image à gauche de l'accordéon, sur ordinateur uniquement.
3. Sinon → accordéon seul, sans image.

L'image n'apparaît donc jamais deux fois, et l'image globale `cta/nettoyage-vitres-appartement-rouen.webp` n'est plus utilisée que par le bloc d'appel à l'action de l'accueil.

Cadrage : `object-center` pour une image FAQ dédiée (portrait), `object-[78%_center]` pour le repli couverture.

## À faire

Images FAQ à générer (portrait 2:3, 1024×1536 minimum) : **terrasse, vitres, bureaux, commerces, parking, immeubles, distributeurs, camion, toiture**.

- **Distributeurs et camion** sont prioritaires : ce sont les deux pages en repli. La couverture y apparaît deux fois, et le cadrage à 78 % tombe mal sur distributeurs (couloir vide, le distributeur est au bord gauche).
- Les 7 autres n'ont pas de bloc FAQ du contenu : leur image ira à gauche de l'accordéon.
- **Couverture toiture** : toujours à régénérer (voir « Image écartée » plus haut).
