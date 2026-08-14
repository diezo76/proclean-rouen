import type { RouenContent } from '@/types';
import { serviceSections } from './rouen-sections';

const ZONE_CITIES = [
  'Sotteville-lès-Rouen',
  'Mont-Saint-Aignan',
  'Bois-Guillaume',
  'Canteleu',
  'Grand-Quevilly',
  'Petit-Quevilly',
  'Déville-lès-Rouen',
  'Maromme',
  'Notre-Dame-de-Bondeville',
  'Darnétal',
  'Saint-Étienne-du-Rouvray',
];

const PAYMENT_METHODS = 'Chèque, Virement bancaire, Espèces';

export const rouenContent: RouenContent = {
  homepage: {
    h1: 'ProClean - Votre partenaire nettoyage de référence à Rouen',
    subtitle:
      'Experts en nettoyage professionnel de la cathédrale Notre-Dame aux quartiers de la rive droite',
    introSection: {
      heading:
        'Services de nettoyage personnalisés pour Rouennais particuliers et professionnels',
      paragraph:
        'ProClean vous propose des solutions de nettoyage adaptées à Rouen et son agglomération. Établie au cœur de la Seine-Maritime, notre équipe comprend les enjeux spécifiques du patrimoine rouennais. Du vieux Rouen historique aux nouveaux quartiers de Saint-Sever, nous maîtrisons les techniques préservant l\'architecture normande traditionnelle face à l\'humidité de la Seine.',
    },
    whyUs: {
      heading: 'Les atouts ProClean à Rouen',
      items: [
        {
          title: 'Savoir-faire patrimonial',
          description:
            'Depuis notre installation rouennaise, ProClean excelle dans la régénération des tissus d\'ameublement, la maintenance des espaces professionnels et la gestion des situations délicates comme le syndrome de Diogène. Nos spécialistes allient respect du patrimoine et méthodes modernes pour des résultats exceptionnels et pérennes.',
          icon: 'Shield',
          stat: '15+',
          statLabel: "ans d'expérience",
        },
        {
          title: 'Service rapide - Estimation en 24h',
          description:
            'Disponibilité assurée dans toute la agglomération : Rive Gauche, Rive Droite, Saint-Sever, Grammont. Nos techniciens interviennent promptement, en situation d\'urgence comme pour vos rendez-vous programmés.',
          icon: 'Clock',
          stat: '24h',
          statLabel: 'délai de réponse',
        },
        {
          title: 'Excellence client - Notre promesse',
          description:
            'Toute intervention fait l\'objet d\'un contrôle qualité minutieux assorti de garanties fermes. Votre sérénité constitue notre objectif principal.',
          icon: 'Star',
          stat: '98%',
          statLabel: 'clients satisfaits',
        },
        {
          title: 'Tarifs transparents',
          description:
            'Devis gratuit et détaillé sous 24h. Aucun frais caché, aucune surprise. Vous savez exactement ce que vous payez avant chaque intervention.',
          icon: 'BadgeDollarSign',
          stat: '0€',
          statLabel: 'frais cachés',
        },
      ],
    },
    servicesOverview: {
      heading: 'Nos prestations de nettoyage à Rouen',
      services: [
        {
          emoji: '🛋️',
          title: 'Restauration Canapés et Tissus d\'ameublement',
          description:
            'Révélez la beauté de vos textiles avec notre expertise rouennaise confirmée. Notre méthode exclusive élimine taches persistantes, allergènes et acariens en préservant l\'intégrité des matières. Transformation visible dès la première séance pour canapés, fauteuils et matelas.',
          slug: 'nettoyage-canape-rouen',
        },
        {
          emoji: '📦',
          title: 'Remise en État Après Déménagement',
          description:
            'Facilitez votre installation à Rouen. Nos équipes réalisent un nettoyage complet irréprochable sécurisant la restitution de votre dépôt de garantie. Sols, baies vitrées, surfaces, sanitaires - élimination totale des traces avec matériel professionnel spécialisé.',
          slug: 'nettoyage-apres-demenagement-rouen',
        },
        {
          emoji: '🏢',
          title: 'Entretien Bureaux et Espaces Professionnels',
          description:
            'Optimisez votre cadre de travail pour vos collaborateurs rouennais. Notre maîtrise de l\'entretien d\'espaces professionnels garantit des lieux impeccables stimulant performance et confort. Plannings souples, équipes qualifiées, efficacité immédiate.',
          slug: 'nettoyage-bureaux-rouen',
        },
        {
          emoji: '🏠',
          title: 'Traitement Syndrome de Diogène et Locaux Insalubres',
          description:
            'Pour les situations complexes, notre équipe rouennaise agit avec empathie et confidentialité. Spécialisés dans le syndrome de Diogène, nos techniciens emploient des méthodes éprouvées pour rétablir des espaces de vie salubres. Suivi individualisé en toute discrétion.',
          slug: 'nettoyage-diogene-rouen',
        },
      ],
    },
    zone: {
      heading: 'Secteur d\'intervention autour de Rouen',
      paragraph:
        'Nous opérons dans toute la agglomération et villes proches.',
      cities: ZONE_CITIES,
      paymentMethods: PAYMENT_METHODS,
    },
    about: {
      heading: 'ProClean, l\'excellence du nettoyage à Rouen',
      subtitle: 'Des espaces transformés, une propreté irréprochable',
      paragraph:
        'Implantés en Seine-Maritime, nous proposons des solutions de nettoyage sur mesure alliant techniques modernes et respect du patrimoine normand. Notre équipe de techniciens qualifiés intervient avec rigueur et discrétion pour remettre vos espaces en état.',
      bulletPoints: [
        'Assurance qualité sur chaque intervention',
        'Large gamme de services pour tous les besoins',
        'Solutions sur-mesure adaptées à votre situation',
        'Sécurité & confidentialité garanties',
      ],
      counters: [
        { value: 5, suffix: '+', label: 'Années d\'expérience' },
        { value: 98, suffix: '%', label: 'Clients satisfaits' },
        { value: 530, suffix: '+', label: 'Interventions réalisées' },
      ],
    },
    testimonials: [
      {
        name: 'Steven A.',
        rating: 5,
        text: 'J\'ai fait appel à ProClean pour le nettoyage de mon appartement pour la remise des clés et je suis entièrement satisfait. Équipe très réactive, échanges simples et fluides, grande disponibilité et surtout un travail impeccable. L\'appartement était parfaitement propre. Je recommande ProClean sans hésitation !',
      },
      {
        name: 'Théo F.',
        rating: 5,
        text: 'Travail minutieux sur mon canapé qui était très taché, facture par mail, personne sérieuse et ponctuelle. Je ne peux que recommander ProClean ! Je n\'hésiterais pas à le recontacter dans le futur.',
      },
      {
        name: 'Emma G.',
        rating: 5,
        text: 'Mon canapé est redevenu comme neuf ! On m\'a même contacté 2-3 jours après pour savoir si le séchage c\'était bien passé et que les taches étaient bien parties. Entreprise très sérieuse, la personne qui est venue était très sympa. Je recommande.',
      },
      {
        name: 'Zen G.',
        rating: 5,
        text: 'J\'ai fait appel à ProClean pour le nettoyage de l\'appartement suite à un déménagement, et j\'ai été ravie. Le contact téléphonique est rapide, agréable, fluide. Les prix sont raisonnables. La prestation impeccable. Bref, que du positif !',
      },
    ],
    ctaMid: {
      heading: 'Prêt pour des locaux impeccables ? Planifiez votre nettoyage dès maintenant !',
      ctaText: 'Demander un devis',
      ctaHref: '/devis-gratuit-rouen',
    },
    servicesShowcase: {
      heading: 'Nos Services',
      subtitle: 'Des prestations complètes pour particuliers et professionnels',
      services: [
        {
          title: 'Nettoyage de Bureaux',
          description: 'Des espaces de travail impeccables pour le bien-être de vos collaborateurs.',
          icon: 'Briefcase',
          href: '/nettoyage-bureaux-rouen',
        },
        {
          title: 'Nettoyage Après Travaux',
          description: 'Remise en état complète de vos locaux après chantier ou rénovation.',
          icon: 'Hammer',
          href: '/nettoyage-apres-travaux-rouen',
        },
        {
          title: 'Entretien de Commerces',
          description: 'Un environnement propre et accueillant pour vos clients et visiteurs.',
          icon: 'Store',
          href: '/entretien-commerces-rouen',
        },
        {
          title: 'Débarras Maison',
          description: 'Évacuation, tri et nettoyage complet en toute discrétion.',
          icon: 'Home',
          href: '/debarras-maison-rouen',
        },
      ],
    },
    faq: [
      {
        question: 'Quels secteurs de Rouen desservez-vous ?',
        answer:
          'Nous couvrons l\'intégralité du territoire rouennais : centre historique, Rive Droite, Rive Gauche, Saint-Sever, Grammont, Darnétal, Saint-Clément, quartier Jardin des Plantes. Nos professionnels maîtrisent les particularités de chaque zone, des maisons à colombages du vieux Rouen aux immeubles contemporains des nouveaux quartiers.',
      },
      {
        question:
          'Vos produits préservent-ils le bâtiments anciens ?',
        answer:
          'Parfaitement. Nos agents de nettoyage sont rigoureusement choisis pour respecter les matériaux anciens. Sur les pierres et boiseries des demeures rouennaises, nous privilégions des solutions douces non agressives. Les tissus délicats reçoivent des soins enzymatiques spécialisés adaptés à l\'humidité de la région.',
      },
      {
        question:
          'Organisez-vous des contrats de maintenance pour les sociétés ?',
        answer:
          'Nos programmes "Propreté Pro Rouen" se calibrent selon vos espaces d\'activité. Abonnement trimestriel avec interventions hebdomadaires : revêtements, sanitaires, menuiseries, zones de travail. Les commerces du centre bénéficient de créneaux personnalisés. Package intégral avec approvisionnement produits et tri des déchets.',
      },
    ],
  },

  services: {
    'nettoyage-diogene-rouen': {
      slug: 'nettoyage-diogene-rouen',
      h1: 'Nettoyage syndrome de Diogène à Rouen : retrouvez votre dignité en toute confidentialité',
      subtitle: 'Experts en décontamination de logements insalubres dans toute la métropole rouennaise',
      metaTitle: 'Nettoyage Syndrome de Diogène Rouen | ProClean - Expert Décontamination',
      metaDescription: 'Nettoyage syndrome de Diogène à Rouen. Débarras, désinfection et décontamination de logements insalubres. Intervention confidentielle, devis gratuit sous 24h.',
      sections: [
        {
          heading: 'Qu\'est-ce que le syndrome de Diogène ?',
          headingLevel: 3,
          paragraphs: [
            'Le <strong>syndrome de Diogène</strong>, c\'est rarement la personne concernée qui en parle. C\'est un voisin qui se plaint des odeurs. Une famille qui découvre l\'état du logement après des mois sans nouvelles. Un propriétaire qui récupère un appartement inhabitable. Ce trouble touche tous les milieux, tous les âges — et quand on le découvre, c\'est souvent un choc. Voici les signes les plus fréquents.',
          ],
          listItems: [
            'Une négligence extrême de l\'hygiène corporelle et domestique',
            'Une tendance pathologique à l\'<strong>accumulation d\'objets</strong> inutiles (syllogomanie)',
            'Une absence de conscience du trouble',
            'Une rupture avec les normes sociales',
            'Un isolement profond',
          ],
        },
        {
          heading: 'ProClean, votre entreprise de nettoyage syndrome de Diogène à Rouen',
          headingLevel: 3,
          paragraphs: [
            'Personne ne sait par où commencer. C\'est normal — c\'est une situation que la plupart des gens n\'ont jamais vue. Nous, on la connaît. L\'équipe <strong>ProClean</strong> intervient à Rouen en véhicule banalisé, sans logo sur les tenues. Les voisins ne savent pas pourquoi on est là. La discrétion, c\'est la première chose qu\'on garantit. Le premier appel est confidentiel, sans jugement.',
            'Débarras complet, tri des affaires personnelles, évacuation des déchets, puis désinfection en profondeur. On coordonne avec la famille ou les services sociaux si nécessaire — chaque situation est différente, on s\'adapte. Une équipe de 3 à 6 personnes, formée spécifiquement à ce type d\'intervention. On assure aussi le <a href="/debarras-maison-rouen">débarras de maison à Rouen</a> pour les situations d\'encombrement sévère.',
          ],
        },
        {
          heading: 'Comment détecter un syndrome de Diogène à Rouen ?',
          headingLevel: 2,
          paragraphs: [
            'La personne concernée ne demande jamais d\'aide elle-même — c\'est ce qui rend la situation si difficile à repérer. C\'est presque toujours un voisin, un membre de la famille ou un travailleur social qui donne l\'alerte. Si vous reconnaissez ces signes chez un proche, appelez-nous. On ne vous jugera pas, on vous expliquera concrètement la marche à suivre. Après notre intervention, un <a href="/nettoyage-appartement-rouen">nettoyage d\'appartement complet</a> finalise la remise en état du logement.',
          ],
          listItems: [
            'Comportement inhabituel de la personne atteinte',
            'Personnes renfermées et isolées, fuyant le contact',
            'Négligence de l\'hygiène corporelle',
            'Mauvaises odeurs émanant du logement',
            'Présence inhabituelle d\'insectes',
          ],
        },
        {
          heading: 'Désinfection et décontamination après syndrome de Diogène',
          headingLevel: 3,
          paragraphs: [
            'Un simple ménage ne suffit pas — et on préfère être honnêtes là-dessus. Après des mois ou des années d\'accumulation, il faut une <strong>désinfection renforcée</strong>, méthodique, pièce par pièce. Murs, sols, sanitaires — tout est nettoyé et désinfecté. Dans les cas de décès, nous éliminons les fluides corporels selon les normes DASRI et délivrons un certificat de désinfection. On gère aussi les nuisibles si besoin. Chaque intervention dure entre 1 et 7 jours selon la gravité. Après notre passage, le logement est habitable. Demandez une <a href="/devis-gratuit-rouen">estimation gratuite et sans engagement</a>.',
          ],
          listItems: [
            'Désinfection par voie aérienne (fumigène)',
            'Nettoyage minutieux de toutes surfaces',
            'Traitement anti-moisissures spécifique au climat de Seine',
          ],
        },
      ],
      pricing: [
        { label: 'Studio/T1 syndrome de Diogène léger', price: '900€ - 1.400€' },
        { label: 'Appartement T2/T3 syndrome de Diogène modéré', price: '1.400€ - 2.600€' },
        { label: 'Appartement T4+ syndrome de Diogène sévère', price: '2.600€ - 4.200€' },
        { label: 'Situations extrêmes avec décès', price: '4.200€ - 8.500€' },
      ],
      zone: {
        paragraph: 'Nous opérons pour le nettoyage syndrome de Diogène dans toute la métropole.',
        cities: ZONE_CITIES,
        paymentMethods: PAYMENT_METHODS,
      },
      faq: [
        { question: 'Combien coûte un nettoyage Diogène ?', answer: 'Entre 1 500€ et 8 000€ selon la gravité. On établit un devis gratuit après visite du logement — c\'est impossible à chiffrer sans voir sur place.' },
        { question: 'Combien de temps dure l\'intervention ?', answer: '1 à 2 jours pour un cas modéré, jusqu\'à 5-7 jours pour les situations les plus lourdes. On vous donne un planning précis après la visite.' },
        { question: 'Est-ce que les voisins verront que c\'est un nettoyage Diogène ?', answer: 'Non. Véhicules banalisés, équipes en tenue neutre, sacs opaques. On travaille en toute discrétion, personne dans l\'immeuble ne saura pourquoi on intervient.' },
        { question: 'Vous évacuez aussi les déchets et encombrants ?', answer: 'Oui, on prend tout en charge : tri, évacuation, déchetterie. Vous n\'avez rien à gérer. Les objets de valeur sont mis de côté et restitués.' },
        { question: 'Mon proche refuse l\'intervention, que faire ?', answer: 'On travaille régulièrement avec les services sociaux et les familles. On peut intervenir sur demande d\'un tuteur, du CCAS ou d\'un mandataire judiciaire.' },
      ],
      relatedSlugs: ['debarras-maison-rouen', 'nettoyage-appartement-rouen', 'nettoyage-apres-travaux-rouen'],
    },

    'nettoyage-apres-travaux-rouen': {
      slug: 'nettoyage-apres-travaux-rouen',
      h1: 'Nettoyage après travaux à Rouen : révélez l\'éclat de vos espaces transformés',
      subtitle: 'Société de nettoyage de fin de chantier et ménage après travaux dans toute la métropole rouennaise',
      metaTitle: 'Nettoyage Après Travaux Rouen | ProClean - Fin de Chantier Expert',
      metaDescription: 'Nettoyage après travaux à Rouen. Remise en état complète de locaux après chantier, respect du patrimoine. Devis gratuit sous 24h.',
      sections: [],
      pricing: [
        { label: 'Appartement standard après travaux', price: '9€ - 14€/m²' },
        { label: 'Logement patrimonial après rénovation', price: '15€ - 22€/m²' },
        { label: 'Maison à colombages', price: '18€ - 28€/m²' },
        { label: 'Locaux commerciaux centre historique', price: '12€ - 18€/m²' },
      ],
      zone: { paragraph: 'Nous opérons pour le nettoyage de fin de chantier dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte un nettoyage après travaux ?', answer: 'Entre 9€ et 22€/m² selon le type de travaux et l\'état du chantier. Un T3 de 65m² revient généralement entre 600€ et 900€.' },
        { question: 'Combien de temps faut-il pour nettoyer après un chantier ?', answer: 'Comptez une journée complète pour un appartement standard. Les gros chantiers (maison entière, rénovation lourde) prennent 2 à 3 jours.' },
        { question: 'La poussière de plâtre revient après votre passage ?', answer: 'Non. On utilise des aspirateurs industriels avec filtre HEPA qui captent les particules ultra-fines. On fait 2 à 3 passes pour être sûrs que tout est parti.' },
        { question: 'Vous enlevez les traces de peinture et de colle au sol ?', answer: 'Oui, c\'est notre spécialité. Grattoirs professionnels et solvants adaptés à chaque surface — on retire la peinture sans abîmer votre carrelage ou parquet.' },
        { question: 'Je peux emménager le jour même ?', answer: 'Oui, dans la majorité des cas. On ventile et sèche pendant l\'intervention. Le logement est habitable dès qu\'on part.' },
      ],
      relatedSlugs: ['nettoyage-appartement-rouen', 'nettoyage-vitres-rouen', 'nettoyage-apres-demenagement-rouen'],
    },

    'nettoyage-lustre-rouen': {
      slug: 'nettoyage-lustre-rouen',
      h1: 'Nettoyage Lustres et Luminaires Rouen - ProClean',
      subtitle: 'Expert Nettoyage de Lustres et Luminaires à Rouen',
      metaTitle: 'Nettoyage Lustres et Luminaires Rouen | ProClean - Expert Éclairage',
      metaDescription: 'Nettoyage professionnel de lustres et luminaires à Rouen. Cristal, bronze, verre soufflé. Intervention sécurisée, devis gratuit.',
      sections: [],
      pricing: [
        { label: 'Lustre classique (5-10 branches)', price: '115€ - 175€' },
        { label: 'Lustre élaboré (10-20 branches)', price: '175€ - 270€' },
        { label: 'Lustre exceptionnel (>20 branches)', price: '270€ - 430€' },
        { label: 'Suspension contemporaine', price: '75€ - 135€' },
        { label: 'Appliques murales (paire)', price: '55€ - 95€' },
      ],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de lustres dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'un lustre ?', answer: 'De 115€ pour un lustre classique (5-10 branches) à 430€ pour les pièces exceptionnelles de plus de 20 branches. Appliques murales : 55€ à 95€ la paire.' },
        { question: 'Vous démontez le lustre pour le nettoyer ?', answer: 'Pas forcément. On nettoie sur place dans 80% des cas. On ne démonte que les pièces très complexes ou fragiles qui nécessitent un travail en atelier.' },
        { question: 'Il y a un risque d\'abîmer le cristal ou le bronze ?', answer: 'Aucun. On utilise des produits spécifiques pour chaque matériau — cristal, bronze, laiton, verre soufflé. Nos techniciens sont formés aux pièces anciennes et fragiles.' },
        { question: 'Combien de temps ça prend ?', answer: '30 minutes à 1h pour un lustre classique. 2 à 3h pour un lustre monumental. On protège vos meubles et le sol pendant toute l\'intervention.' },
      ],
      relatedSlugs: ['nettoyage-appartement-rouen', 'nettoyage-vitres-rouen', 'nettoyage-apres-travaux-rouen'],
    },

    'nettoyage-apres-demenagement-rouen': {
      slug: 'nettoyage-apres-demenagement-rouen',
      h1: 'Nettoyage Après Déménagement et Fin de Bail à Rouen',
      subtitle: 'Expert nettoyage après déménagement et fin de bail dans toute la métropole rouennaise',
      metaTitle: 'Nettoyage Après Déménagement Rouen | ProClean - Fin de Bail Expert',
      metaDescription: 'Nettoyage après déménagement à Rouen. Récupérez votre caution avec un état des lieux impeccable. Devis gratuit sous 24h.',
      sections: [],
      pricing: [
        { label: 'Studio 20-30m²', price: '175€ - 245€' },
        { label: 'T2 30-50m²', price: '245€ - 340€' },
        { label: 'T3 50-70m²', price: '340€ - 470€' },
        { label: 'T4 70-90m²', price: '470€ - 630€' },
        { label: 'T5 et plus 90-120m²', price: '630€ - 820€' },
        { label: 'Maison individuelle 100-150m²', price: '720€ - 1.150€' },
      ],
      zone: { paragraph: 'Nous intervenons pour le nettoyage après déménagement dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Est-ce que je vais récupérer ma caution ?', answer: 'Dans 95% des cas, oui. On nettoie au standard "état des lieux" : sols, sanitaires, cuisine, vitres, placards. Si le propriétaire trouve un défaut lié à notre nettoyage, on repasse gratuitement sous 48h.' },
        { question: 'Combien ça coûte pour un T3 ?', answer: 'Entre 340€ et 470€ pour un T3 de 50-70m². Le prix dépend de la surface et de l\'état du logement. Devis exact après description par téléphone.' },
        { question: 'Quand faut-il réserver par rapport à l\'état des lieux ?', answer: 'Idéalement 48 à 72h avant. On peut intervenir en urgence sous 24h si besoin, mais mieux vaut anticiper pour garantir un créneau.' },
        { question: 'Vous nettoyez aussi le four, le frigo et les placards ?', answer: 'Oui, tout est inclus : intérieur du four, frigo, placards, tiroirs, rebords de fenêtres. C\'est un nettoyage complet, pas juste un coup d\'aspirateur.' },
        { question: 'L\'appartement est vide, c\'est plus rapide ?', answer: 'Oui, on gagne 1 à 2h sans meubles. Un T3 vide prend environ 5-6h, meublé plutôt 7-8h.' },
      ],
      relatedSlugs: ['nettoyage-appartement-rouen', 'nettoyage-apres-travaux-rouen', 'nettoyage-vitres-rouen'],
    },

    'debarras-maison-rouen': {
      slug: 'debarras-maison-rouen',
      h1: 'Débarras de Maison à Rouen - ProClean',
      subtitle: 'Expert débarras de maison et locaux professionnels dans toute la métropole rouennaise',
      metaTitle: 'Débarras Maison Rouen | ProClean - Débarras Complet Expert',
      metaDescription: 'Débarras de maison à Rouen. Évacuation complète, tri sélectif, nettoyage après débarras. Devis gratuit sous 24h.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le débarras dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte un débarras de maison ?', answer: 'Ça dépend du volume à évacuer. Comptez entre 500€ et 3 000€ pour une maison complète. On chiffre sur place gratuitement avant toute intervention.' },
        { question: 'Vous récupérez aussi les caves et greniers ?', answer: 'Oui, on vide tout : cave, grenier, garage, dépendances. On trie sur place — ce qui peut être recyclé ou donné ne part pas à la déchetterie.' },
        { question: 'Que deviennent les objets récupérés ?', answer: 'On trie : recyclage, don aux associations locales, déchetterie agréée pour le reste. Si vous repérez des objets à garder, on les met de côté avant de commencer.' },
        { question: 'En combien de temps vous videz une maison ?', answer: '1 journée pour un appartement ou une petite maison. 2 à 3 jours pour une grande maison très encombrée. On vous donne le planning exact au devis.' },
        { question: 'Vous nettoyez aussi après le débarras ?', answer: 'On peut coupler débarras + nettoyage complet. C\'est souvent demandé pour les successions ou les mises en vente. Un seul interlocuteur, un seul devis.' },
      ],
      relatedSlugs: ['nettoyage-diogene-rouen', 'nettoyage-appartement-rouen', 'nettoyage-apres-demenagement-rouen'],
    },

    'nettoyage-appartement-rouen': {
      slug: 'nettoyage-appartement-rouen',
      h1: 'Nettoyage d\'Appartements et Maisons à Rouen',
      subtitle: 'Excellence et proximité en Seine-Maritime pour l\'entretien résidentiel',
      metaTitle: 'Nettoyage Appartement Maison Rouen | ProClean - Ménage Professionnel',
      metaDescription: 'Nettoyage professionnel d\'appartements et maisons à Rouen. Ménage régulier, grand nettoyage, état des lieux. Devis gratuit sous 24h.',
      sections: [],
      pricing: [
        { label: 'Studio/T1 ménage régulier', price: 'à partir de 28€/séance' },
        { label: 'T2 ménage régulier', price: 'à partir de 38€/séance' },
        { label: 'T3 ménage régulier', price: 'à partir de 48€/séance' },
        { label: 'Grand ménage T1/T2', price: '130€ - 190€' },
        { label: 'Grand ménage T3/T4', price: '190€ - 270€' },
        { label: 'Grand ménage Maison 100-150m²', price: '270€ - 380€' },
      ],
      zone: { paragraph: 'Nous intervenons sur l\'ensemble de la métropole rouennaise et ses communes associées.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte un ménage régulier pour un T3 ?', answer: 'À partir de 48€ par séance pour un T3. Le tarif baisse avec la fréquence : hebdomadaire est plus avantageux que ponctuel.' },
        { question: 'Vous venez avec vos produits et votre matériel ?', answer: 'Oui, on apporte tout : aspirateur pro, produits, serpillères, chiffons. Vous n\'avez rien à fournir ni à préparer.' },
        { question: 'C\'est toujours la même personne qui vient ?', answer: 'On essaie de garder le même technicien pour les contrats réguliers. Il connaît votre logement et vos habitudes, c\'est plus efficace.' },
        { question: 'Vous intervenez le week-end ?', answer: 'Oui, samedi inclus. On s\'adapte à vos horaires — beaucoup de clients préfèrent qu\'on passe pendant qu\'ils sont au travail.' },
        { question: 'Quelle différence entre ménage régulier et grand nettoyage ?', answer: 'Le ménage régulier couvre l\'essentiel (sols, sanitaires, cuisine, poussières). Le grand nettoyage ajoute les vitres, l\'intérieur des placards, le four, les plinthes — tout ce qu\'on ne fait pas chaque semaine.' },
      ],
      relatedSlugs: ['nettoyage-apres-demenagement-rouen', 'nettoyage-apres-travaux-rouen', 'nettoyage-vitres-rouen'],
    },

    'nettoyage-voiture-rouen': {
      slug: 'nettoyage-voiture-rouen',
      h1: 'Nettoyage Intérieur Voiture à Rouen - ProClean',
      subtitle: 'Expert nettoyage et désinfection de l\'intérieur de véhicules à Rouen',
      metaTitle: 'Nettoyage Intérieur Voiture Rouen | ProClean - Détailing Auto Expert',
      metaDescription: 'Nettoyage intérieur voiture à Rouen. Sièges, moquettes, tableaux de bord, désinfection complète. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage intérieur de voitures dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte un nettoyage intérieur complet ?', answer: 'Entre 80€ et 150€ selon la taille du véhicule et son état. Un SUV très sale coûtera plus qu\'une citadine bien entretenue.' },
        { question: 'Les sièges seront secs en combien de temps ?', answer: 'Comptez 3 à 4h de séchage après notre passage. On utilise l\'injection-extraction qui retire 90% de l\'humidité — vos sièges ne seront pas détrempés.' },
        { question: 'Vous enlevez les taches de siège bébé et les miettes ?', answer: 'Oui, c\'est notre quotidien. Taches de lait, compote, miettes incrustées dans les rails — on traite tout, y compris sous les sièges.' },
        { question: 'Vous venez à domicile ou je dois amener ma voiture ?', answer: 'On se déplace chez vous, sur votre parking ou à votre bureau. Pas besoin de vous déplacer, on a tout le matériel dans notre véhicule.' },
      ],
      relatedSlugs: ['nettoyage-canape-rouen', 'nettoyage-tapis-rouen', 'nettoyage-moquette-rouen'],
    },

    'nettoyage-terrasse-rouen': {
      slug: 'nettoyage-terrasse-rouen',
      h1: 'Nettoyage Balcon et Terrasse à Rouen - ProClean',
      subtitle: 'Excellence mobile au cœur de la Normandie pour l\'entretien de vos espaces extérieurs',
      metaTitle: 'Nettoyage Terrasse Balcon Rouen | ProClean - Haute Pression Expert',
      metaDescription: 'Nettoyage terrasse et balcon à Rouen. Décapage haute pression, traitement anti-mousse, protection longue durée. Devis gratuit.',
      sections: [],
      pricing: [
        { label: 'Balcon jusqu\'à 5m²', price: '35€' },
        { label: 'Balcon 6-10m²', price: '55€' },
        { label: 'Balcon 11-20m²', price: '85€' },
        { label: 'Terrasse jusqu\'à 15m²', price: '75€' },
        { label: 'Terrasse 16-30m²', price: '125€' },
        { label: 'Terrasse 31-50m²', price: '185€' },
      ],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de terrasses et balcons dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'une terrasse ?', answer: 'De 75€ pour une terrasse de 15m² à 185€ pour 50m². Le traitement anti-mousse est en supplément (25 à 45€) mais fortement recommandé en Normandie.' },
        { question: 'Le karcher n\'abîme pas mes dalles ?', answer: 'On n\'utilise pas de karcher haute pression brut. On travaille en basse pression contrôlée avec des buses adaptées à chaque matériau — pierre, bois, carrelage, composite.' },
        { question: 'Le traitement anti-mousse tient combien de temps ?', answer: 'Entre 12 et 18 mois selon l\'exposition. En Normandie, avec l\'humidité, on recommande un traitement annuel pour garder une terrasse propre toute l\'année.' },
        { question: 'Vous nettoyez aussi les balcons d\'appartement ?', answer: 'Oui, à partir de 35€ pour un balcon de 5m². On intervient en immeuble sans problème, avec du matériel adapté aux petits espaces.' },
        { question: 'C\'est quelle saison la meilleure pour nettoyer ?', answer: 'Le printemps (mars-mai) est idéal : on retire la mousse accumulée en hiver et le traitement a tout l\'été pour agir. Mais on intervient toute l\'année.' },
      ],
      relatedSlugs: ['nettoyage-toiture-rouen', 'nettoyage-vitres-rouen', 'nettoyage-appartement-rouen'],
    },

    'nettoyage-bureaux-rouen': {
      slug: 'nettoyage-bureaux-rouen',
      h1: 'Nettoyage de Bureaux à Rouen - ProClean',
      subtitle: 'Excellence métropolitaine normande pour l\'entretien professionnel d\'espaces de travail',
      metaTitle: 'Nettoyage Bureaux Rouen | ProClean - Entretien Professionnel Expert',
      metaDescription: 'Nettoyage de bureaux à Rouen. Entretien quotidien, hebdomadaire ou mensuel. Espaces de travail impeccables. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de bureaux dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Vous intervenez en dehors des heures de bureau ?', answer: 'Oui, c\'est même la norme. La majorité de nos clients préfèrent qu\'on passe tôt le matin (6h-8h) ou en soirée pour ne pas gêner les équipes.' },
        { question: 'Combien coûte l\'entretien de bureaux ?', answer: 'À partir de 0,50€/m² par passage. Le tarif dépend de la surface, de la fréquence et des prestations incluses. On établit un forfait mensuel fixe.' },
        { question: 'Vous fournissez aussi le papier toilette et le savon ?', answer: 'On peut inclure le réapprovisionnement des consommables dans le contrat (papier, savon, essuie-mains). Beaucoup de clients préfèrent tout centraliser.' },
        { question: 'On peut changer la fréquence en cours de contrat ?', answer: 'Oui, les contrats sont flexibles. Vous pouvez passer d\'hebdomadaire à quotidien (ou l\'inverse) avec un préavis d\'une semaine.' },
      ],
      relatedSlugs: ['entretien-commerces-rouen', 'nettoyage-vitres-rouen', 'nettoyage-moquette-rouen'],
    },

    'entretien-commerces-rouen': {
      slug: 'entretien-commerces-rouen',
      h1: 'Entretien de Commerces à Rouen - ProClean',
      subtitle: 'Nettoyage professionnel de boutiques et surfaces commerciales à Rouen',
      metaTitle: 'Entretien Commerces Rouen | ProClean - Nettoyage Boutiques Expert',
      metaDescription: 'Entretien de commerces à Rouen. Nettoyage régulier de boutiques, magasins et surfaces commerciales. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour l\'entretien de commerces dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Vous passez pendant ou après les heures d\'ouverture ?', answer: 'Comme vous préférez. La plupart des commerces choisissent un passage avant l\'ouverture ou après la fermeture pour ne pas gêner la clientèle.' },
        { question: 'Combien ça coûte pour une boutique de 50m² ?', answer: 'Comptez entre 150€ et 250€/mois pour un entretien 3 fois par semaine. Le tarif exact dépend des prestations (sol, vitrines, sanitaires, etc.).' },
        { question: 'Vous nettoyez aussi les vitrines ?', answer: 'Oui, intérieur et extérieur. Une vitrine propre, c\'est la première chose que vos clients voient. On peut l\'inclure dans le forfait ou le faire en prestation ponctuelle.' },
        { question: 'Je peux tester avant de m\'engager sur un contrat ?', answer: 'Oui, on propose un premier passage d\'essai. Si le résultat vous convient, on met en place le contrat. Aucun engagement avant d\'avoir vu notre travail.' },
      ],
      relatedSlugs: ['nettoyage-bureaux-rouen', 'nettoyage-vitres-rouen', 'entretien-immeubles-rouen'],
    },

    'nettoyage-parking-rouen': {
      slug: 'nettoyage-parking-rouen',
      h1: 'Nettoyage de Parking à Rouen - ProClean',
      subtitle: 'Entretien professionnel de parkings souterrains et extérieurs à Rouen',
      metaTitle: 'Nettoyage Parking Rouen | ProClean - Entretien Parking Expert',
      metaDescription: 'Nettoyage de parking à Rouen. Balayage, lavage, désinfection de parkings souterrains et extérieurs. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de parkings dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Vous nettoyez quel type de parking ?', answer: 'Souterrains, couverts, extérieurs, en silo — on s\'adapte. On intervient aussi bien pour les copropriétés que pour les parkings d\'entreprise ou les centres commerciaux.' },
        { question: 'Comment vous enlevez les taches d\'huile au sol ?', answer: 'Dégraissant industriel + autolaveuse. Les taches récentes partent complètement. Les anciennes sont fortement atténuées — le sol retrouve un aspect propre et uniforme.' },
        { question: 'C\'est quoi la fréquence recommandée ?', answer: 'Un nettoyage trimestriel pour un parking résidentiel, mensuel pour un parking commercial à fort passage. On adapte selon le trafic réel.' },
        { question: 'Vous intervenez la nuit pour ne pas bloquer les places ?', answer: 'Oui, on intervient généralement entre 22h et 6h pour les parkings à fort trafic. On travaille par zones pour libérer les places au fur et à mesure.' },
      ],
      relatedSlugs: ['entretien-immeubles-rouen', 'nettoyage-bureaux-rouen', 'entretien-commerces-rouen'],
    },

    'entretien-immeubles-rouen': {
      slug: 'entretien-immeubles-rouen',
      h1: 'Entretien d\'Immeubles à Rouen - ProClean',
      subtitle: 'Nettoyage des parties communes d\'immeubles et copropriétés à Rouen',
      metaTitle: 'Entretien Immeubles Rouen | ProClean - Parties Communes Expert',
      metaDescription: 'Entretien d\'immeubles à Rouen. Nettoyage parties communes, cages d\'escalier, halls d\'entrée. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour l\'entretien d\'immeubles dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Qu\'est-ce qui est inclus dans l\'entretien des parties communes ?', answer: 'Hall, escaliers, paliers, ascenseur, local poubelles, vitres des parties communes. On peut ajouter le parking et les caves si besoin.' },
        { question: 'Combien ça coûte pour un immeuble de 20 lots ?', answer: 'Entre 400€ et 700€/mois selon la fréquence et les prestations. On travaille beaucoup avec les syndics — le devis détaillé est présenté en AG.' },
        { question: 'Le gardien est parti, vous pouvez le remplacer ?', answer: 'On prend en charge tout ce que faisait le gardien côté nettoyage : ménage quotidien, sortie des poubelles, nettoyage du local vélos. Souvent moins cher qu\'un gardien.' },
        { question: 'Comment ça se passe avec le syndic ?', answer: 'On travaille directement avec le syndic ou le conseil syndical. Facturation mensuelle, rapport d\'intervention, interlocuteur dédié. On connaît les process des copropriétés.' },
      ],
      relatedSlugs: ['nettoyage-parking-rouen', 'nettoyage-bureaux-rouen', 'nettoyage-vitres-rouen'],
    },

    'nettoyage-distributeurs-rouen': {
      slug: 'nettoyage-distributeurs-rouen',
      h1: 'Nettoyage Équipements Libre-Service à Rouen - ProClean',
      subtitle: 'Nettoyage et désinfection de distributeurs automatiques et bornes à Rouen',
      metaTitle: 'Nettoyage Distributeurs Rouen | ProClean - Équipements Libre-Service',
      metaDescription: 'Nettoyage d\'équipements libre-service à Rouen. Distributeurs, bornes, laveries automatiques. Désinfection professionnelle. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage d\'équipements libre-service dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Quels types de machines nettoyez-vous ?', answer: 'Distributeurs de boissons et snacks, bornes de paiement, laveries automatiques, bornes interactives, caisses automatiques — tout équipement en libre-service.' },
        { question: 'Vous utilisez des produits compatibles avec les écrans tactiles ?', answer: 'Oui, produits antistatiques spécifiques pour les écrans et surfaces électroniques. Aucun risque pour les composants, et les écrans retrouvent leur réactivité.' },
        { question: 'C\'est quoi la bonne fréquence pour des distributeurs ?', answer: 'Hebdomadaire pour les machines à fort passage (gares, centres commerciaux). Bi-mensuel pour les bureaux. On adapte selon la fréquentation réelle.' },
        { question: 'Vous désinfectez aussi les zones de contact ?', answer: 'Oui, désinfection systématique des boutons, trappes, écrans, monnayeurs — toutes les zones touchées par les utilisateurs. Protocole sanitaire strict.' },
      ],
      relatedSlugs: ['entretien-commerces-rouen', 'nettoyage-bureaux-rouen', 'entretien-immeubles-rouen'],
    },

    'nettoyage-camion-rouen': {
      slug: 'nettoyage-camion-rouen',
      h1: 'Nettoyage Cabine Poids Lourds à Rouen - ProClean',
      subtitle: 'Nettoyage intérieur et désinfection de cabines de poids lourds à Rouen',
      metaTitle: 'Nettoyage Cabine Poids Lourds Rouen | ProClean - Nettoyage Camion Expert',
      metaDescription: 'Nettoyage cabine poids lourds à Rouen. Intérieur, sièges, tableau de bord, désinfection complète. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de cabines de poids lourds dans toute la métropole.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'une cabine de camion ?', answer: 'Entre 90€ et 180€ selon l\'état et la taille de la cabine. Tarifs dégressifs à partir de 5 véhicules — idéal pour les flottes.' },
        { question: 'Vous venez sur notre dépôt ou on doit amener le camion ?', answer: 'On se déplace sur votre dépôt, zone industrielle ou parking. On a tout le matériel dans notre véhicule, pas besoin de point d\'eau sur place.' },
        { question: 'Le chauffeur peut récupérer son camion le jour même ?', answer: 'Oui, comptez 2 à 3h pour une cabine complète. Les sièges sont secs en 3-4h grâce à notre technique d\'injection-extraction.' },
        { question: 'Vous proposez des contrats pour les transporteurs ?', answer: 'Oui, contrats mensuels ou trimestriels avec planning fixe. On s\'adapte aux rotations de vos chauffeurs pour intervenir quand le camion est au dépôt.' },
      ],
      relatedSlugs: ['nettoyage-voiture-rouen', 'nettoyage-bureaux-rouen', 'entretien-commerces-rouen'],
    },

    'nettoyage-canape-rouen': {
      slug: 'nettoyage-canape-rouen',
      h1: 'Nettoyage de Canapés à Rouen - ProClean',
      subtitle: 'Expert en rénovation et nettoyage professionnel de canapés et fauteuils à Rouen',
      metaTitle: 'Nettoyage Canapé Rouen | ProClean - Rénovation Tissus Expert',
      metaDescription: 'Nettoyage de canapés à Rouen. Détachage, désinfection, rénovation de canapés, fauteuils et tissus d\'ameublement. Devis gratuit sous 24h.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de canapés dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'un canapé ?', answer: 'Entre 60€ et 120€ pour un canapé 3 places standard. Le prix varie selon la matière (tissu, cuir, velours) et le niveau de salissure.' },
        { question: 'Mon canapé sera sec le soir même ?', answer: 'Oui, comptez 3 à 5h de séchage. On utilise l\'injection-extraction qui retire la majorité de l\'eau. Vous pouvez vous asseoir dessus le soir.' },
        { question: 'Vous enlevez les taches anciennes ?', answer: 'La plupart partent complètement : café, vin, urine, nourriture. Les taches très anciennes (plusieurs années) sont fortement atténuées mais parfois pas à 100%.' },
        { question: 'C\'est sans risque pour le tissu ?', answer: 'Oui. On teste toujours le produit sur une zone cachée avant de traiter l\'ensemble. Nos produits sont adaptés à chaque matière — tissu, cuir, microfibre, velours, alcantara.' },
        { question: 'Vous nettoyez aussi les coussins et les accoudoirs ?', answer: 'Tout est inclus : assises, dossiers, coussins, accoudoirs, et même la structure. On traite le canapé en entier, pas juste les parties visibles.' },
      ],
      relatedSlugs: ['nettoyage-tapis-rouen', 'nettoyage-matelas-rouen', 'nettoyage-moquette-rouen'],
    },

    'nettoyage-tapis-rouen': {
      slug: 'nettoyage-tapis-rouen',
      h1: 'Nettoyage de Tapis à Rouen - ProClean',
      subtitle: 'Nettoyage en profondeur et traitement anti-acariens de tapis à Rouen',
      metaTitle: 'Nettoyage Tapis Rouen | ProClean - Nettoyage Tapis Expert',
      metaDescription: 'Nettoyage de tapis à Rouen. Shampooing, détachage, traitement anti-acariens pour tous types de tapis. Devis gratuit sous 24h.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de tapis dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'un tapis ?', answer: 'Entre 8€ et 15€/m² selon le type de tapis. Un tapis de salon de 6m² revient donc entre 48€ et 90€.' },
        { question: 'Vous nettoyez les tapis orientaux sans les abîmer ?', answer: 'Oui, on adapte la technique au type de tapis. Les tapis orientaux, persans et en laine ont des produits spécifiques qui respectent les teintures et les fibres naturelles.' },
        { question: 'Mon tapis sent le chien, ça va partir ?', answer: 'Oui. On utilise un traitement enzymatique qui détruit les molécules d\'odeur en profondeur — pas juste un parfum par-dessus. L\'odeur disparaît complètement.' },
        { question: 'Le tapis sèche en combien de temps ?', answer: 'Entre 4 et 8h selon l\'épaisseur. Un tapis fin sèche en 4h, un tapis berbère épais peut prendre une journée. On recommande de le laisser dans un endroit ventilé.' },
      ],
      relatedSlugs: ['nettoyage-canape-rouen', 'nettoyage-moquette-rouen', 'nettoyage-matelas-rouen'],
    },

    'nettoyage-moquette-rouen': {
      slug: 'nettoyage-moquette-rouen',
      h1: 'Nettoyage de Moquette à Rouen - ProClean',
      subtitle: 'Shampooing et injection-extraction professionnelle de moquettes à Rouen',
      metaTitle: 'Nettoyage Moquette Rouen | ProClean - Shampooing Moquette Expert',
      metaDescription: 'Nettoyage de moquette à Rouen. Injection-extraction, shampooing professionnel, traitement anti-acariens. Devis gratuit sous 24h.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de moquettes dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Je peux marcher sur la moquette après le nettoyage ?', answer: 'Oui, mais en chaussettes propres. La moquette est humide mais pas détrempée. Comptez 4 à 6h pour un séchage complet.' },
        { question: 'Ça enlève les taches de la moquette de bureau ?', answer: 'Oui, les taches courantes (café, encre, nourriture) partent dans 90% des cas. On pré-traite chaque tache individuellement avant le shampooing général.' },
        { question: 'Combien ça coûte au m² ?', answer: 'Entre 3€ et 6€/m² selon l\'état de la moquette. Pour 50m² de bureaux, comptez entre 150€ et 300€.' },
        { question: 'Vous traitez aussi les acariens et allergènes ?', answer: 'Oui, l\'injection-extraction à l\'eau chaude élimine 95% des acariens. On peut ajouter un traitement anti-acariens longue durée pour les personnes allergiques.' },
        { question: 'C\'est mieux de remplacer ou de nettoyer la moquette ?', answer: 'Un nettoyage professionnel coûte 5 à 10 fois moins cher qu\'un remplacement. Si la moquette n\'est pas usée jusqu\'à la trame, le nettoyage lui redonne une seconde vie.' },
      ],
      relatedSlugs: ['nettoyage-tapis-rouen', 'nettoyage-canape-rouen', 'nettoyage-bureaux-rouen'],
    },

    'nettoyage-matelas-rouen': {
      slug: 'nettoyage-matelas-rouen',
      h1: 'Nettoyage de Matelas à Rouen - ProClean',
      subtitle: 'Désinfection et nettoyage professionnel de matelas à Rouen',
      metaTitle: 'Nettoyage Matelas Rouen | ProClean - Désinfection Matelas Expert',
      metaDescription: 'Nettoyage de matelas à Rouen. Élimination acariens, allergènes, taches. Désinfection en profondeur. Devis gratuit sous 24h.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de matelas dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage d\'un matelas ?', answer: 'Entre 50€ et 90€ pour un matelas 2 places. Le tarif dépend de la taille et du niveau de salissure. On fait souvent matelas + sommier ensemble.' },
        { question: 'Je peux dormir dessus le soir même ?', answer: 'Oui, on intervient le matin et le matelas est sec en 4 à 6h. Vous pouvez remettre vos draps et dormir dessus le soir sans problème.' },
        { question: 'Ça élimine vraiment les acariens ?', answer: 'Oui, 99% des acariens et allergènes sont éliminés. C\'est particulièrement recommandé pour les personnes asthmatiques, allergiques ou les enfants en bas âge.' },
        { question: 'Vous enlevez les taches d\'urine de matelas ?', answer: 'Oui, c\'est l\'une de nos demandes les plus fréquentes. On traite la tache et surtout l\'odeur en profondeur avec un produit enzymatique. Le résultat est complet.' },
        { question: 'À quelle fréquence faut-il nettoyer un matelas ?', answer: 'Une fois par an minimum, deux fois pour les personnes allergiques. Un matelas accumule en moyenne 2 millions d\'acariens en un an — le nettoyage professionnel est le seul moyen de les éliminer.' },
      ],
      relatedSlugs: ['nettoyage-canape-rouen', 'nettoyage-tapis-rouen', 'nettoyage-appartement-rouen'],
    },

    'nettoyage-vitres-rouen': {
      slug: 'nettoyage-vitres-rouen',
      h1: 'Nettoyage de Vitres à Rouen - ProClean',
      subtitle: 'Lavage professionnel de vitres et baies vitrées à Rouen',
      metaTitle: 'Nettoyage Vitres Rouen | ProClean - Lavage Vitres Expert',
      metaDescription: 'Nettoyage de vitres à Rouen. Vitres, baies vitrées, vérandas pour particuliers et professionnels. Résultat sans traces. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de vitres dans toute la métropole rouennaise.', cities: ZONE_CITIES, paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Combien coûte le nettoyage de vitres ?', answer: 'Entre 3€ et 8€ par vitre standard (intérieur + extérieur). Pour une maison de 10 fenêtres, comptez entre 60€ et 120€ selon l\'accessibilité.' },
        { question: 'Vous nettoyez aussi les vitres en hauteur ?', answer: 'Oui, jusqu\'à 12m avec des perches télescopiques à eau pure. Au-delà, on utilise des nacelles. Pas besoin d\'échafaudage dans la majorité des cas.' },
        { question: 'Il pleut tout le temps à Rouen, ça sert à quoi de nettoyer ?', answer: 'L\'eau de pluie ne salit pas les vitres — c\'est la poussière, le pollen et la pollution qui créent les traces. Après notre passage, même sous la pluie, vos vitres restent propres 4 à 6 semaines.' },
        { question: 'Vous faites aussi les encadrements et les rebords ?', answer: 'Oui, le nettoyage des cadres, rebords et rails est inclus. On ne laisse pas des vitres propres avec des cadres sales — ça se voit tout de suite.' },
      ],
      relatedSlugs: ['nettoyage-appartement-rouen', 'nettoyage-bureaux-rouen', 'nettoyage-lustre-rouen'],
    },

    'nettoyage-toiture-rouen': {
      slug: 'nettoyage-toiture-rouen',
      h1: 'Nettoyage Toiture, Façade et Gouttières à Rouen - ProClean',
      subtitle: 'Expert démoussage, traitement hydrofuge et nettoyage de façades en Seine-Maritime',
      metaTitle: 'Nettoyage Toiture Façade Rouen | ProClean - Démoussage Expert Normandie',
      metaDescription: 'Nettoyage toiture, façade et gouttières à Rouen. Démoussage basse pression, traitement hydrofuge, entretien gouttières. Devis gratuit.',
      sections: [],
      zone: { paragraph: 'Nous intervenons pour le nettoyage de toitures et façades dans toute la métropole rouennaise et la Seine-Maritime.', cities: [...ZONE_CITIES, 'Petit-Couronne', 'Grand-Couronne', 'Bonsecours', 'Franqueville-Saint-Pierre', 'Barentin', 'Elbeuf'], paymentMethods: PAYMENT_METHODS },
      faq: [
        { question: 'Le nettoyage haute pression abîme-t-il les tuiles ?', answer: 'On ne fait jamais de haute pression sur une toiture. On travaille en basse pression contrôlée qui élimine mousses et lichens sans abîmer les tuiles, ardoises ou zinc.' },
        { question: 'Le traitement hydrofuge est-il vraiment nécessaire ?', answer: 'En Normandie, oui. L\'hydrofuge empêche l\'eau de pénétrer dans les tuiles et ralentit la repousse des mousses. Sans traitement, elles reviennent en 1 an. Avec, vous êtes tranquille 5 à 8 ans.' },
        { question: 'Combien coûte le démoussage d\'une toiture ?', answer: 'Entre 15€ et 30€/m² selon le type de couverture et l\'état. Pour une maison de 80m² de toiture, comptez entre 1 200€ et 2 400€, traitement hydrofuge inclus.' },
        { question: 'Vous nettoyez aussi les gouttières ?', answer: 'Oui, on débouche et nettoie les gouttières avec test d\'écoulement. C\'est souvent fait en même temps que la toiture — on est déjà en hauteur, autant tout faire d\'un coup.' },
        { question: 'C\'est quelle période idéale pour traiter la toiture ?', answer: 'Le printemps (avril-juin) ou l\'automne (septembre-octobre). Il faut un temps sec pendant 48h après le traitement hydrofuge pour qu\'il prenne correctement.' },
      ],
      relatedSlugs: ['nettoyage-terrasse-rouen', 'nettoyage-vitres-rouen', 'nettoyage-apres-travaux-rouen'],
    },
  },

  categories: {
    particuliers: {
      h1: 'Nettoyage pour Particuliers à Rouen',
      subtitle: 'Services de nettoyage professionnel adaptés aux besoins des particuliers rouennais',
      metaTitle: 'Nettoyage Particuliers Rouen | ProClean - Services à Domicile',
      metaDescription: 'Services de nettoyage professionnel pour particuliers à Rouen. Appartements, maisons, après déménagement, syndrome de Diogène. Devis gratuit sous 24h.',
      introText: 'ProClean accompagne les particuliers rouennais avec des services de nettoyage professionnel complets. De l\'entretien régulier de votre appartement au nettoyage après déménagement, en passant par les situations complexes comme le syndrome de Diogène, nos équipes interviennent avec professionnalisme et discrétion dans toute la métropole rouennaise. Chaque prestation est réalisée avec du matériel professionnel et des produits adaptés au patrimoine architectural normand.',
    },
    professionnels: {
      h1: 'Nettoyage pour Professionnels à Rouen',
      subtitle: 'Solutions d\'entretien sur mesure pour bureaux, commerces et locaux professionnels',
      metaTitle: 'Nettoyage Professionnels Rouen | ProClean - Entretien Entreprises',
      metaDescription: 'Services de nettoyage professionnel pour entreprises à Rouen. Bureaux, commerces, immeubles, parkings. Contrats sur mesure, devis gratuit sous 24h.',
      introText: 'ProClean propose aux professionnels rouennais des solutions d\'entretien sur mesure. Bureaux, commerces, immeubles ou parkings : nos équipes qualifiées garantissent des espaces de travail impeccables. Contrats flexibles adaptés à vos horaires et besoins spécifiques, interventions en dehors des heures d\'ouverture possibles. Faites confiance à notre expertise pour valoriser l\'image de votre entreprise.',
    },
    tissus: {
      h1: 'Nettoyage Tissus & Ameublement à Rouen',
      subtitle: 'Expert en nettoyage de canapés, tapis, moquettes et matelas à Rouen',
      metaTitle: 'Nettoyage Tissus Ameublement Rouen | ProClean - Expert Textile',
      metaDescription: 'Nettoyage professionnel de tissus d\'ameublement à Rouen. Canapés, tapis, moquettes, matelas. Techniques douces, résultats garantis. Devis gratuit sous 24h.',
      introText: 'ProClean est votre expert en nettoyage de tissus d\'ameublement à Rouen. Canapés, tapis, moquettes et matelas retrouvent leur éclat grâce à nos techniques professionnelles d\'injection-extraction et de traitement enzymatique. Nos méthodes respectent les fibres tout en éliminant taches, acariens et allergènes. Idéal pour les personnes sensibles et les familles avec enfants.',
    },
  },
};

// Inject auto-generated content sections from rouen-sections.ts
for (const slug of Object.keys(rouenContent.services)) {
  const svc = rouenContent.services[slug];
  if (svc.sections.length === 0 && serviceSections[slug]) {
    svc.sections = serviceSections[slug];
  }
}
