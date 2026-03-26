export interface CityData {
  name: string;
  slug: string;
  population: number;
  heroSubtitle: string;
  description: string[];
  quartiers: string[];
  villesVoisines: { name: string; slug: string }[];
  faq: { question: string; answer: string }[];
  services: { title: string; desc: string; href: string }[];
}

export const cities: CityData[] = [
  // === TIER 1 ===
  {
    name: 'Sotteville-lès-Rouen',
    slug: 'sotteville-les-rouen',
    population: 29000,
    heroSubtitle: 'Nettoyage pro à 10 min de Rouen. Pavillons, copropriétés, bureaux — on intervient dans toute la ville.',
    description: [
      'Avec ses immeubles des années 60-70 le long de la rue de Paris et ses pavillons côté Quatre-Mares, Sotteville a des besoins variés. On intervient aussi bien dans les cages d\'escalier des copropriétés que dans les maisons individuelles du quartier résidentiel.',
      'Le tramway nous amène en 10 minutes depuis Rouen — on connaît bien le coin. Les syndics de Sotteville nous font confiance pour l\'entretien des parties communes, et les particuliers nous appellent surtout pour les canapés, les matelas et le ménage de fin de bail.',
      'On fait aussi les locaux commerciaux autour de la gare et les bureaux de la zone d\'activité. Sotteville bouge, et les pros ont besoin que ça reste propre.',
    ],
    quartiers: ['Quatre-Mares', 'Centre-ville', 'Ferdinand Buisson', 'Cordier', 'Les Bruyères', 'Grammont'],
    villesVoisines: [
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
      { name: 'Saint-Étienne-du-Rouvray', slug: 'nettoyage-saint-etienne-du-rouvray' },
      { name: 'Le Petit-Quevilly', slug: 'nettoyage-petit-quevilly' },
    ],
    faq: [
      { question: 'Vous intervenez dans quel délai à Sotteville ?', answer: 'Sous 24 à 48h en temps normal. On est à 10 min en tramway, c\'est l\'une des villes où on intervient le plus vite.' },
      { question: 'Vous nettoyez les parties communes d\'immeuble à Sotteville ?', answer: 'Oui, on a plusieurs contrats avec des syndics sottevillais. Hall, escaliers, ascenseur, local poubelles — tout est inclus.' },
      { question: 'C\'est le même prix qu\'à Rouen ?', answer: 'Oui, pas de supplément. Sotteville fait partie de notre zone principale d\'intervention.' },
    ],
    services: [
      { title: 'Canapés & tissus', desc: 'Détachage et rénovation de vos canapés et fauteuils.', href: '/nettoyage-canape-rouen' },
      { title: 'Bureaux', desc: 'Entretien de vos espaces de travail, en journée ou le soir.', href: '/nettoyage-bureaux-rouen' },
      { title: 'Après déménagement', desc: 'Ménage complet pour récupérer la caution.', href: '/nettoyage-apres-demenagement-rouen' },
      { title: 'Vitres', desc: 'Nettoyage intérieur/extérieur, sans traces.', href: '/nettoyage-vitres-rouen' },
      { title: 'Immeubles', desc: 'Entretien des parties communes et cages d\'escalier.', href: '/entretien-immeubles-rouen' },
      { title: 'Appartements', desc: 'Ménage régulier ou grand nettoyage ponctuel.', href: '/nettoyage-appartement-rouen' },
    ],
  },
  {
    name: 'Saint-Étienne-du-Rouvray',
    slug: 'saint-etienne-du-rouvray',
    population: 29000,
    heroSubtitle: 'Du campus universitaire aux quartiers résidentiels, on nettoie tout Saint-Étienne.',
    description: [
      'Saint-Étienne-du-Rouvray, c\'est le campus du Madrillet avec ses résidences étudiantes, les grands ensembles du Château Blanc, et les pavillons tranquilles du centre. Chaque quartier a ses problématiques : les studios étudiants à nettoyer entre deux rentrées, les copropriétés qui cherchent un prestataire fiable, les maisons familiales qui veulent un grand ménage de printemps.',
      'On intervient régulièrement dans la zone industrielle et commerciale pour l\'entretien des bureaux et locaux. Les entreprises du Madrillet nous connaissent — on passe souvent tôt le matin ou après la fermeture pour ne gêner personne.',
      'Côté particuliers, les demandes les plus fréquentes : nettoyage de canapés (surtout avec les enfants et les animaux), fin de bail avant état des lieux, et nettoyage après travaux de rénovation.',
    ],
    quartiers: ['Le Madrillet', 'Château Blanc', 'Centre-ville', 'Hartmann', 'Les Cateliers', 'La Houssière'],
    villesVoisines: [
      { name: 'Sotteville-lès-Rouen', slug: 'nettoyage-sotteville-les-rouen' },
      { name: 'Le Grand-Quevilly', slug: 'nettoyage-grand-quevilly' },
      { name: 'Le Petit-Quevilly', slug: 'nettoyage-petit-quevilly' },
    ],
    faq: [
      { question: 'Vous nettoyez les résidences étudiantes du Madrillet ?', answer: 'Oui, on fait régulièrement les studios entre deux locataires. Ménage complet, canapé, matelas — tout pour que le prochain étudiant arrive dans du propre.' },
      { question: 'Combien coûte un nettoyage de T2 à Saint-Étienne ?', answer: 'À partir de 38€ pour un ménage régulier. Grand nettoyage : entre 130€ et 190€ selon l\'état.' },
      { question: 'Vous passez aussi dans la zone industrielle ?', answer: 'Oui, on entretient plusieurs locaux dans la zone du Madrillet. Bureaux, entrepôts, locaux commerciaux — on s\'adapte aux horaires des entreprises.' },
    ],
    services: [
      { title: 'Canapés & tissus', desc: 'Rénovation de vos textiles d\'ameublement.', href: '/nettoyage-canape-rouen' },
      { title: 'Après déménagement', desc: 'Nettoyage fin de bail pour récupérer la caution.', href: '/nettoyage-apres-demenagement-rouen' },
      { title: 'Bureaux', desc: 'Entretien régulier ou ponctuel de vos locaux.', href: '/nettoyage-bureaux-rouen' },
      { title: 'Appartements', desc: 'Ménage complet, régulier ou en profondeur.', href: '/nettoyage-appartement-rouen' },
      { title: 'Après travaux', desc: 'Remise en état après chantier ou rénovation.', href: '/nettoyage-apres-travaux-rouen' },
      { title: 'Vitres', desc: 'Lavage pro sans traces, intérieur et extérieur.', href: '/nettoyage-vitres-rouen' },
    ],
  },
  {
    name: 'Le Grand-Quevilly',
    slug: 'grand-quevilly',
    population: 26700,
    heroSubtitle: 'Pavillons, commerces et copropriétés — ProClean nettoie tout Grand-Quevilly.',
    description: [
      'Entre le centre commercial des Bruyères et les quartiers pavillonnaires du bord de Seine, Grand-Quevilly mélange habitat collectif et maisons individuelles. Les copropriétés nous font confiance pour l\'entretien des parties communes, et les particuliers nous appellent surtout pour les canapés et les fin de bail.',
      'La zone commerciale des Bruyères génère aussi pas mal de demandes : nettoyage de vitrines, entretien de locaux commerciaux, nettoyage de parkings souterrains. On passe souvent avant l\'ouverture des magasins.',
      'Les pavillons le long du boulevard Stalingrad et autour du parc des Provinces ont souvent besoin de nettoyage de terrasse et de toiture — le climat humide fait pousser la mousse plus vite qu\'ailleurs.',
    ],
    quartiers: ['Les Bruyères', 'Centre-ville', 'Les Provinces', 'Bord de Seine', 'La Pépinière'],
    villesVoisines: [
      { name: 'Le Petit-Quevilly', slug: 'nettoyage-petit-quevilly' },
      { name: 'Saint-Étienne-du-Rouvray', slug: 'nettoyage-saint-etienne-du-rouvray' },
      { name: 'Canteleu', slug: 'nettoyage-canteleu' },
    ],
    faq: [
      { question: 'Vous nettoyez les commerces des Bruyères ?', answer: 'Oui, on entretient plusieurs boutiques et locaux dans la zone commerciale. Passage avant ouverture, vitrines incluses.' },
      { question: 'Mon pavillon a de la mousse sur la terrasse, vous traitez ça ?', answer: 'Oui, décapage basse pression + traitement anti-mousse longue durée. Résultat garanti 12-18 mois.' },
      { question: 'Vous faites le nettoyage de parking d\'immeuble ?', answer: 'Oui, on intervient dans les parkings souterrains et couverts de Grand-Quevilly. Dégraissage, balayage, lavage complet.' },
    ],
    services: [
      { title: 'Canapés & tissus', desc: 'Nettoyage et détachage de vos textiles.', href: '/nettoyage-canape-rouen' },
      { title: 'Terrasse', desc: 'Décapage et traitement anti-mousse de vos extérieurs.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Commerces', desc: 'Entretien de boutiques et surfaces de vente.', href: '/entretien-commerces-rouen' },
      { title: 'Immeubles', desc: 'Parties communes, halls et escaliers.', href: '/entretien-immeubles-rouen' },
      { title: 'Parking', desc: 'Nettoyage de parkings souterrains et extérieurs.', href: '/nettoyage-parking-rouen' },
      { title: 'Toiture', desc: 'Démoussage et traitement hydrofuge.', href: '/nettoyage-toiture-rouen' },
    ],
  },
  {
    name: 'Le Petit-Quevilly',
    slug: 'petit-quevilly',
    population: 22300,
    heroSubtitle: 'À 5 min de Rouen rive gauche. Nettoyage rapide pour particuliers et pros.',
    description: [
      'Petit-Quevilly est collé à Rouen rive gauche — on y est en 5 minutes. C\'est une ville dense avec beaucoup de copropriétés, des rues commerçantes et quelques zones pavillonnaires vers le sud. Les demandes les plus courantes : entretien d\'immeubles, nettoyage de fin de bail et canapés.',
      'Le quartier de la gare et le centre-ville ont des immeubles anciens qui demandent un entretien régulier des parties communes. Les locataires qui partent nous appellent pour le ménage avant l\'état des lieux — c\'est devenu un réflexe.',
      'On intervient aussi dans les locaux commerciaux le long de la rue de Paris et autour de la mairie. Bureaux, cabinets médicaux, boutiques — chacun a ses contraintes horaires et on s\'adapte.',
    ],
    quartiers: ['Centre-ville', 'La Phalange', 'Les Chartreux', 'Quartier de la Gare', 'Sud'],
    villesVoisines: [
      { name: 'Le Grand-Quevilly', slug: 'nettoyage-grand-quevilly' },
      { name: 'Sotteville-lès-Rouen', slug: 'nettoyage-sotteville-les-rouen' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'Vous êtes basés à Petit-Quevilly ?', answer: 'Non, on est basés au Havre mais on intervient à Petit-Quevilly plusieurs fois par semaine. C\'est à 5 min de Rouen, on y est très souvent.' },
      { question: 'Vous nettoyez les cabinets médicaux ?', answer: 'Oui, avec un protocole de désinfection adapté aux locaux de santé. On passe après les heures de consultation.' },
      { question: 'Y a-t-il des frais de déplacement ?', answer: 'Non, zéro frais de déplacement sur toute la métropole rouennaise. Petit-Quevilly inclus.' },
    ],
    services: [
      { title: 'Immeubles', desc: 'Parties communes, escaliers et halls d\'entrée.', href: '/entretien-immeubles-rouen' },
      { title: 'Après déménagement', desc: 'Ménage complet avant état des lieux.', href: '/nettoyage-apres-demenagement-rouen' },
      { title: 'Canapés & tissus', desc: 'Détachage et désinfection de vos canapés.', href: '/nettoyage-canape-rouen' },
      { title: 'Bureaux', desc: 'Entretien de locaux professionnels.', href: '/nettoyage-bureaux-rouen' },
      { title: 'Commerces', desc: 'Nettoyage de boutiques et vitrines.', href: '/entretien-commerces-rouen' },
      { title: 'Vitres', desc: 'Lavage professionnel sans traces.', href: '/nettoyage-vitres-rouen' },
    ],
  },
  {
    name: 'Mont-Saint-Aignan',
    slug: 'mont-saint-aignan',
    population: 21300,
    heroSubtitle: 'Ville étudiante et résidentielle. Nettoyage de locations, pavillons et commerces.',
    description: [
      'Ville étudiante avec le campus universitaire, Mont-Saint-Aignan c\'est beaucoup de locations meublées qui ont besoin d\'un bon nettoyage entre deux locataires. Les résidences du plateau et les pavillons du centre-bourg demandent des approches différentes.',
      'On fait aussi les vitres des commerces de la place du marché et l\'entretien des copropriétés du quartier Colbert. Les propriétaires bailleurs nous appellent à chaque changement de locataire — ménage complet, canapé, matelas, tout y passe.',
      'Les grandes maisons du côté de la forêt Verte ont souvent besoin de nettoyage de toiture et de terrasse. Le coin est arboré, la mousse s\'installe vite sur les tuiles et les dalles.',
    ],
    quartiers: ['Centre-bourg', 'Campus universitaire', 'Colbert', 'Plateau', 'Forêt Verte', 'Les Sapins'],
    villesVoisines: [
      { name: 'Bois-Guillaume', slug: 'nettoyage-bois-guillaume' },
      { name: 'Bihorel', slug: 'nettoyage-bihorel' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'Vous nettoyez les locations meublées étudiantes ?', answer: 'C\'est une grosse partie de notre activité à Mont-Saint-Aignan. Ménage complet entre deux locataires, canapé, matelas — le logement est prêt pour la rentrée.' },
      { question: 'Les grandes maisons du plateau, vous faites aussi ?', answer: 'Oui, ménage complet, vitres, terrasse et toiture. On a le matériel pour les grandes surfaces et les hauteurs.' },
      { question: 'Vous passez combien de temps pour un studio étudiant ?', answer: 'Environ 3h pour un ménage complet (sols, sanitaires, cuisine, vitres). Si on ajoute le matelas et le canapé, comptez 4-5h.' },
    ],
    services: [
      { title: 'Après déménagement', desc: 'Ménage entre deux locataires, prêt pour le suivant.', href: '/nettoyage-apres-demenagement-rouen' },
      { title: 'Canapés & matelas', desc: 'Nettoyage des textiles de locations meublées.', href: '/nettoyage-canape-rouen' },
      { title: 'Toiture', desc: 'Démoussage et hydrofuge pour les pavillons.', href: '/nettoyage-toiture-rouen' },
      { title: 'Terrasse', desc: 'Décapage et traitement anti-mousse.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Vitres', desc: 'Lavage de vitres pour commerces et particuliers.', href: '/nettoyage-vitres-rouen' },
      { title: 'Appartements', desc: 'Ménage régulier ou grand nettoyage.', href: '/nettoyage-appartement-rouen' },
    ],
  },
  // === TIER 2 ===
  {
    name: 'Bois-Guillaume',
    slug: 'bois-guillaume',
    population: 14000,
    heroSubtitle: 'Quartier résidentiel prisé. Nettoyage de maisons, terrasses et vitres.',
    description: [
      'Bois-Guillaume, c\'est le quartier résidentiel chic de l\'agglo rouennaise. Grandes maisons avec jardin, résidences récentes et quelques copropriétés standing. Les demandes tournent surtout autour du nettoyage de vitres (baies vitrées, vérandas), des terrasses en bois ou pierre, et du ménage à domicile.',
      'Les propriétaires de Bois-Guillaume sont exigeants — et c\'est normal. On utilise des produits adaptés aux matériaux nobles (pierre de Caen, parquet massif, carrelage haut de gamme) et on prend le temps de faire les choses bien.',
    ],
    quartiers: ['Centre-bourg', 'La Mare aux Daims', 'Le Becquet', 'Les Portes de la Forêt'],
    villesVoisines: [
      { name: 'Mont-Saint-Aignan', slug: 'nettoyage-mont-saint-aignan' },
      { name: 'Bihorel', slug: 'nettoyage-bihorel' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'Vous utilisez des produits adaptés aux parquets anciens ?', answer: 'Oui, produits neutres spécifiques pour parquet massif, tomettes et pierre naturelle. On ne met jamais de javel sur du bois.' },
      { question: 'Combien pour le nettoyage de vitres d\'une grande maison ?', answer: 'Entre 80€ et 150€ selon le nombre de fenêtres et l\'accessibilité. On fait intérieur + extérieur + encadrements.' },
      { question: 'Vous faites les vérandas ?', answer: 'Oui, vitres, charpente apparente et sol de véranda. C\'est une demande fréquente à Bois-Guillaume.' },
    ],
    services: [
      { title: 'Vitres', desc: 'Baies vitrées, vérandas, fenêtres de toit.', href: '/nettoyage-vitres-rouen' },
      { title: 'Terrasse', desc: 'Pierre, bois, composite — on s\'adapte.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Appartements', desc: 'Ménage à domicile régulier ou ponctuel.', href: '/nettoyage-appartement-rouen' },
      { title: 'Toiture', desc: 'Démoussage de tuiles et traitement hydrofuge.', href: '/nettoyage-toiture-rouen' },
      { title: 'Canapés', desc: 'Nettoyage de cuir, tissu et velours.', href: '/nettoyage-canape-rouen' },
      { title: 'Après travaux', desc: 'Remise en état après rénovation.', href: '/nettoyage-apres-travaux-rouen' },
    ],
  },
  {
    name: 'Canteleu',
    slug: 'canteleu',
    population: 14000,
    heroSubtitle: 'Des cités du plateau aux pavillons en bord de forêt. On nettoie tout Canteleu.',
    description: [
      'Canteleu est perchée sur les hauteurs de Rouen, entre la forêt de Roumare et la vallée de Seine. La ville mélange les grands ensembles du plateau (Cité Verte, Cité Rose) et les quartiers pavillonnaires plus bas. On adapte nos interventions à chaque type d\'habitat.',
      'Les copropriétés du plateau représentent une bonne partie de nos contrats ici : entretien des parties communes, nettoyage des parkings, cages d\'escalier. Côté pavillons, c\'est surtout la terrasse et la toiture qui reviennent — la mousse adore l\'humidité de la forêt.',
    ],
    quartiers: ['Cité Verte', 'Cité Rose', 'Le Becquet', 'Centre-ville', 'Bord de forêt'],
    villesVoisines: [
      { name: 'Le Grand-Quevilly', slug: 'nettoyage-grand-quevilly' },
      { name: 'Maromme', slug: 'nettoyage-maromme' },
      { name: 'Déville-lès-Rouen', slug: 'nettoyage-deville-les-rouen' },
    ],
    faq: [
      { question: 'Vous montez jusqu\'au plateau de Canteleu ?', answer: 'Oui, sans problème et sans supplément. On intervient dans toute la ville, du plateau au bord de Seine.' },
      { question: 'Les copropriétés de la Cité Verte, c\'est possible ?', answer: 'Oui, on entretient déjà plusieurs résidences du plateau. Contrat régulier avec le syndic, facturation mensuelle.' },
      { question: 'Le démoussage marche bien avec l\'humidité de la forêt ?', answer: 'Oui, mais on recommande un traitement annuel au lieu de tous les 18 mois à cause de l\'ombre et de l\'humidité forestière.' },
    ],
    services: [
      { title: 'Immeubles', desc: 'Parties communes des copropriétés du plateau.', href: '/entretien-immeubles-rouen' },
      { title: 'Toiture', desc: 'Démoussage adapté au climat forestier.', href: '/nettoyage-toiture-rouen' },
      { title: 'Terrasse', desc: 'Traitement anti-mousse longue durée.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Parking', desc: 'Nettoyage de parkings résidentiels.', href: '/nettoyage-parking-rouen' },
      { title: 'Canapés', desc: 'Nettoyage de textiles d\'ameublement.', href: '/nettoyage-canape-rouen' },
      { title: 'Appartements', desc: 'Ménage régulier ou grand nettoyage.', href: '/nettoyage-appartement-rouen' },
    ],
  },
  {
    name: 'Maromme',
    slug: 'maromme',
    population: 12000,
    heroSubtitle: 'Petite ville, grands besoins. ProClean intervient à Maromme sans supplément.',
    description: [
      'Maromme est une commune compacte entre Déville et Canteleu. Beaucoup de maisons individuelles, quelques résidences et une zone commerciale le long de la route de Duclair. C\'est une ville calme où les gens entretiennent bien leur logement — on y fait surtout du ménage régulier et du nettoyage de fin de bail.',
      'Les propriétaires de pavillons nous sollicitent pour la terrasse (mousse tenace dans ce coin humide), les vitres et le grand ménage de printemps. Pour les locataires qui partent, le nettoyage complet avant état des lieux est notre prestation la plus demandée.',
    ],
    quartiers: ['Centre-ville', 'La Mare aux Clercs', 'Route de Duclair', 'Les Coquets'],
    villesVoisines: [
      { name: 'Canteleu', slug: 'nettoyage-canteleu' },
      { name: 'Déville-lès-Rouen', slug: 'nettoyage-deville-les-rouen' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'Maromme c\'est pas trop loin pour vous ?', answer: 'Non, on est à 15 min de Rouen. Maromme est dans notre zone principale, pas de frais de déplacement.' },
      { question: 'Vous faites le ménage régulier à Maromme ?', answer: 'Oui, on a des clients en ménage hebdomadaire et bi-mensuel. Toujours la même personne qui passe, elle connaît votre maison.' },
      { question: 'Vous nettoyez les terrasses en bois ?', answer: 'Oui, basse pression + produit spécial bois. On ne karche jamais le bois à haute pression, ça l\'abîme.' },
    ],
    services: [
      { title: 'Appartements', desc: 'Ménage régulier ou grand nettoyage.', href: '/nettoyage-appartement-rouen' },
      { title: 'Après déménagement', desc: 'Nettoyage complet fin de bail.', href: '/nettoyage-apres-demenagement-rouen' },
      { title: 'Terrasse', desc: 'Décapage et traitement anti-mousse.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Vitres', desc: 'Lavage pro intérieur/extérieur.', href: '/nettoyage-vitres-rouen' },
      { title: 'Canapés', desc: 'Nettoyage de canapés et fauteuils.', href: '/nettoyage-canape-rouen' },
      { title: 'Toiture', desc: 'Démoussage et hydrofuge.', href: '/nettoyage-toiture-rouen' },
    ],
  },
  {
    name: 'Déville-lès-Rouen',
    slug: 'deville-les-rouen',
    population: 11000,
    heroSubtitle: 'Entre Rouen et la vallée du Cailly. Nettoyage pro sans frais de déplacement.',
    description: [
      'Déville-lès-Rouen s\'étire le long de la vallée du Cailly, entre les coteaux boisés et la rivière. La ville a gardé un côté village avec son centre-bourg, tout en ayant des résidences récentes et quelques copropriétés. On y intervient pour du ménage régulier, des fins de bail et de l\'entretien de parties communes.',
      'Les maisons le long du Cailly ont parfois des problèmes d\'humidité — on le sait, on adapte nos produits. Les terrasses et façades prennent la mousse plus vite que dans les quartiers exposés au sud. Un bon démoussage annuel et c\'est réglé.',
    ],
    quartiers: ['Centre-bourg', 'Vallée du Cailly', 'Les Coteaux', 'Route de Dieppe'],
    villesVoisines: [
      { name: 'Maromme', slug: 'nettoyage-maromme' },
      { name: 'Canteleu', slug: 'nettoyage-canteleu' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'L\'humidité de la vallée du Cailly pose problème ?', answer: 'Oui, les façades et terrasses prennent la mousse plus vite. On recommande un traitement annuel au lieu de tous les 18 mois.' },
      { question: 'Vous faites les copropriétés de Déville ?', answer: 'Oui, on a des contrats réguliers avec plusieurs résidences. Entretien des parties communes, vitres des halls, local poubelles.' },
      { question: 'C\'est quoi votre zone d\'intervention exacte ?', answer: 'Toute la métropole rouennaise, de Canteleu à Darnétal. Déville est en plein dans notre zone, pas de frais de déplacement.' },
    ],
    services: [
      { title: 'Terrasse', desc: 'Traitement anti-mousse adapté à la vallée.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Toiture', desc: 'Démoussage et protection hydrofuge.', href: '/nettoyage-toiture-rouen' },
      { title: 'Immeubles', desc: 'Entretien des parties communes.', href: '/entretien-immeubles-rouen' },
      { title: 'Appartements', desc: 'Ménage régulier ou grand nettoyage.', href: '/nettoyage-appartement-rouen' },
      { title: 'Vitres', desc: 'Lavage pro intérieur et extérieur.', href: '/nettoyage-vitres-rouen' },
      { title: 'Canapés', desc: 'Nettoyage et rénovation de textiles.', href: '/nettoyage-canape-rouen' },
    ],
  },
  {
    name: 'Darnétal',
    slug: 'darnetal',
    population: 9800,
    heroSubtitle: 'Rive droite, à 10 min de Rouen. Nettoyage pro pour tous vos besoins.',
    description: [
      'Darnétal est sur la rive droite, juste à l\'est de Rouen. Ville ouvrière historique reconvertie, elle garde un mélange d\'habitat ancien (maisons de briques le long de l\'avenue de la Libération) et de résidences plus récentes. On y fait beaucoup de nettoyage de canapés — les familles avec enfants et animaux, c\'est notre clientèle principale ici.',
      'Le centre-bourg a des commerces qui nous sollicitent pour l\'entretien de leurs vitrines et de leurs sols. Et les copropriétés le long de l\'avenue demandent un entretien régulier des escaliers et des halls.',
    ],
    quartiers: ['Centre-bourg', 'Avenue de la Libération', 'Le Bois du Roule', 'Les Sapins'],
    villesVoisines: [
      { name: 'Bihorel', slug: 'nettoyage-bihorel' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
      { name: 'Bois-Guillaume', slug: 'nettoyage-bois-guillaume' },
    ],
    faq: [
      { question: 'Vous intervenez souvent à Darnétal ?', answer: 'Oui, c\'est à 10 min de Rouen. On passe plusieurs fois par semaine, souvent le même jour que Bihorel — c\'est sur le même axe.' },
      { question: 'Les maisons anciennes en brique, vous savez faire ?', answer: 'Oui, on adapte les produits aux façades en brique. Pas de haute pression, nettoyage doux pour ne pas abîmer les joints.' },
      { question: 'Vous faites le nettoyage de vitrines de commerces ?', answer: 'Oui, intérieur et extérieur. On passe avant l\'ouverture ou après la fermeture selon vos préférences.' },
    ],
    services: [
      { title: 'Canapés', desc: 'Détachage et rénovation pour les familles.', href: '/nettoyage-canape-rouen' },
      { title: 'Commerces', desc: 'Vitrines et sols de boutiques.', href: '/entretien-commerces-rouen' },
      { title: 'Immeubles', desc: 'Halls, escaliers et parties communes.', href: '/entretien-immeubles-rouen' },
      { title: 'Vitres', desc: 'Lavage professionnel sans traces.', href: '/nettoyage-vitres-rouen' },
      { title: 'Appartements', desc: 'Ménage régulier ou en profondeur.', href: '/nettoyage-appartement-rouen' },
      { title: 'Après travaux', desc: 'Remise en état post-chantier.', href: '/nettoyage-apres-travaux-rouen' },
    ],
  },
  {
    name: 'Bihorel',
    slug: 'bihorel',
    population: 9100,
    heroSubtitle: 'Commune résidentielle aux portes de Rouen. Nettoyage soigné pour belles maisons.',
    description: [
      'Bihorel est une petite commune résidentielle coincée entre Rouen et Bois-Guillaume. Surtout des pavillons avec jardins, des maisons bourgeoises et quelques petites résidences. Ici, les gens font attention à leur intérieur — on y fait beaucoup de nettoyage de canapés en cuir, de tapis et de grands ménages de saison.',
      'Les propriétaires de Bihorel nous demandent souvent du nettoyage de vitres (grandes baies vitrées côté jardin) et de l\'entretien de terrasse. C\'est une clientèle qui sait ce qu\'elle veut et qui revient d\'une année sur l\'autre.',
    ],
    quartiers: ['Centre-bourg', 'Route de Neufchâtel', 'Les Sapins', 'Côte de Bihorel'],
    villesVoisines: [
      { name: 'Mont-Saint-Aignan', slug: 'nettoyage-mont-saint-aignan' },
      { name: 'Bois-Guillaume', slug: 'nettoyage-bois-guillaume' },
      { name: 'Darnétal', slug: 'nettoyage-darnetal' },
    ],
    faq: [
      { question: 'Vous nettoyez les canapés en cuir ?', answer: 'Oui, c\'est même une de nos spécialités. Produit nourrissant adapté au type de cuir (pleine fleur, nubuck, croûte). Résultat visible immédiatement.' },
      { question: 'Les grandes baies vitrées, vous gérez ?', answer: 'Oui, perches télescopiques pour l\'extérieur, finition impeccable à la raclette. On fait aussi les fenêtres de toit.' },
      { question: 'Bihorel c\'est petit, vous venez quand même ?', answer: 'Oui, on y passe souvent — c\'est entre Rouen et Bois-Guillaume, on traverse la ville régulièrement.' },
    ],
    services: [
      { title: 'Canapés & cuir', desc: 'Nettoyage et soin du cuir et des tissus.', href: '/nettoyage-canape-rouen' },
      { title: 'Vitres', desc: 'Baies vitrées, fenêtres de toit, vérandas.', href: '/nettoyage-vitres-rouen' },
      { title: 'Tapis', desc: 'Nettoyage de tapis orientaux et modernes.', href: '/nettoyage-tapis-rouen' },
      { title: 'Terrasse', desc: 'Décapage et protection de vos extérieurs.', href: '/nettoyage-terrasse-rouen' },
      { title: 'Appartements', desc: 'Grand ménage de saison.', href: '/nettoyage-appartement-rouen' },
      { title: 'Matelas', desc: 'Désinfection et élimination des acariens.', href: '/nettoyage-matelas-rouen' },
    ],
  },
  {
    name: 'Elbeuf',
    slug: 'elbeuf',
    population: 17000,
    heroSubtitle: 'À 20 km au sud de Rouen. ProClean intervient aussi à Elbeuf et alentours.',
    description: [
      'Elbeuf est plus loin que les autres villes de notre zone — 20 km au sud de Rouen — mais on y va régulièrement. Ancienne ville textile, Elbeuf a un parc immobilier varié : maisons de maître le long de la Seine, immeubles du centre-ville, pavillons des années 70-80 dans les quartiers résidentiels.',
      'Les demandes les plus fréquentes à Elbeuf : nettoyage après travaux (beaucoup de rénovations en cours), syndrome de Diogène (on intervient discrètement), et entretien de copropriétés. Les particuliers nous appellent aussi pour les canapés et les matelas — on groupe les interventions pour rentabiliser le déplacement.',
    ],
    quartiers: ['Centre-ville', 'Saint-Jean', 'Puchot', 'La Cerisaie', 'Bord de Seine'],
    villesVoisines: [
      { name: 'Saint-Étienne-du-Rouvray', slug: 'nettoyage-saint-etienne-du-rouvray' },
      { name: 'Le Grand-Quevilly', slug: 'nettoyage-grand-quevilly' },
      { name: 'Rouen', slug: 'entreprise-nettoyage-rouen' },
    ],
    faq: [
      { question: 'Il y a un supplément pour Elbeuf ?', answer: 'Un forfait déplacement de 20€ peut s\'appliquer selon la prestation. On vous le dit au devis, pas de surprise.' },
      { question: 'Vous regroupez les interventions à Elbeuf ?', answer: 'Oui, on essaie de caler plusieurs rendez-vous le même jour à Elbeuf et alentours. Ça nous évite des allers-retours et ça peut réduire vos frais.' },
      { question: 'Vous intervenez pour le syndrome de Diogène à Elbeuf ?', answer: 'Oui, en toute discrétion. Véhicule banalisé, intervention discrète, évacuation complète. On coordonne avec les services sociaux si besoin.' },
    ],
    services: [
      { title: 'Après travaux', desc: 'Remise en état après rénovation.', href: '/nettoyage-apres-travaux-rouen' },
      { title: 'Syndrome de Diogène', desc: 'Intervention discrète et complète.', href: '/nettoyage-diogene-rouen' },
      { title: 'Immeubles', desc: 'Entretien des copropriétés.', href: '/entretien-immeubles-rouen' },
      { title: 'Canapés', desc: 'Nettoyage de textiles d\'ameublement.', href: '/nettoyage-canape-rouen' },
      { title: 'Matelas', desc: 'Désinfection et traitement anti-acariens.', href: '/nettoyage-matelas-rouen' },
      { title: 'Débarras', desc: 'Évacuation complète de maisons et appartements.', href: '/debarras-maison-rouen' },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
