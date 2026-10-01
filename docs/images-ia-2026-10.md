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
