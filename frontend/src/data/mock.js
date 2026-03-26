// Mock data for NG Déco & Habitat website

export const companyInfo = {
  name: "NG Déco & Habitat",
  tagline: "Vendez plus vite et au meilleur prix grâce au home staging",
  location: "Basse-Ham, Moselle",
  serviceArea: "Moselle et Luxembourg",
  phone: "+33 6 30 21 80 17",
  email: "ngdeco.habitat@gmail.com",
  calendlyUrl: "https://calendly.com/ng-homestaging/appeldecouverte",
  description: "Expert en home staging et valorisation immobili\xE8re, nous transformons vos espaces pour cr\xE9er le coup de c\u0153ur qui acc\xE9l\xE8re la vente."
};

export const services = [
{
  id: 1,
  title: "Audit Home Staging",
  description: "Diagnostic professionnel de votre bien avec plan d'action personnalisé pour optimiser sa valorisation.",
  details: [
  "Analyse complète de votre bien",
  "Identification des points à améliorer",
  "Recommandations sur-mesure",
  "Différentes formules selon vos besoins"],

  icon: "home",
  offerings: [
  {
    name: "Audit Simple",
    price: "200 € - 250 €",
    duration: "1h30 - 2h",
    features: [
    "Visite complète du bien",
    "Conseils oraux personnalisés",
    "Mini compte-rendu",
    "Remboursé si prestation complète signée"],

    highlight: "Idéal pour un premier diagnostic"
  },
  {
    name: "Audit + Compte Rendu",
    price: "250 € - 350 €",
    features: [
    "Tout de l'audit simple",
    "Plan d'action structuré et détaillé",
    "Priorisation des actions",
    "Suggestions mobilier et couleurs"],

    highlight: "Recommandé"
  },
  {
    name: "Audit Premium",
    price: "350 € - 450 €",
    features: [
    "Tout de l'audit + compte rendu",
    "Visuels et projections 3D",
    "Accompagnement suivi (WhatsApp/Visio)",
    "Support pendant 1 mois"],

    highlight: "Solution complète"
  }]

},
{
  id: 2,
  title: "Home Staging Partiel",
  description: "Valorisation ciblée jusqu'à 2 pièces principales pour un impact immédiat à budget maîtrisé.",
  details: [
  "Visite + plan d'action",
  "Désencombrement / réagencement",
  "Accessoires + petite déco (en prêt)",
  "Liste shopping si besoin",
  "Mise en scène finale"],

  icon: "palette",
  price: "450 € - 750 €",
  priceDetails: "jusqu'à 2 pièces",
  additionalPrice: "+150/200 € par pièce supplémentaire",
  note: "Hors location mobilier (en option) et achats spécifiques"
},
{
  id: 3,
  title: "Home Staging Complet",
  description: "Transformation complète de votre bien pour maximiser son attractivité et accélérer la vente au meilleur prix.",
  details: [
  "Diagnostic complet",
  "Désencombrement accompagné",
  "Optimisation des flux / lumière",
  "Mise en scène complète",
  "Accessoires fournis (prêt)",
  "Option location mobilier léger",
  "Photos professionnelles"],

  icon: "trendingUp",
  price: "900 € - 1 800 €",
  priceDetails: "selon taille du bien",
  note: "Hors location mobilier (en option) et achats spécifiques"
}];


export const portfolioProjects = [
{
  id: 1,
  title: "Transformation Salon Moderne",
  location: "Basse-Ham",
  beforeImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/i4f9i1xy_avant.png",
  afterImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/c0uo85wk_apres.png",
  description: "Transformation complète d'un salon avec mobilier moderne, palette de couleurs apaisante et optimisation de l'espace.",
  result: "Vendu en 3 semaines",
  priceIncrease: "+8% sur le prix de vente"
},
{
  id: 2,
  title: "Location Courte Durée",
  location: "Lisbonne",
  beforeImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/w3tw9uzn_salon%20avant.jpg",
  afterImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/4btt5rph_Salon%20moderne%20avec%20canap%C3%A9%20gris.png",
  description: "Préparation d'un appartement 2 chambres vide pour de la location courte durée qui a ensuite été vendu en 1 semaine.",
  result: "Vendu en 1 semaine",
  priceIncrease: "Mise en location réussie"
},
{
  id: 3,
  title: "Valorisation Pièce Vide",
  location: "Luxembourg",
  beforeImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/j90pjq7c_24%20mars%202026%2C%2012_33_10.png",
  afterImage: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224",
  description: "Transformation d'une pièce vide en espace de vie accueillant grâce à un aménagement optimisé.",
  result: "Vendu en 1 mois",
  priceIncrease: "+10% sur l'estimation"
},
{
  id: 4,
  title: "Cuisine Élégante",
  location: "Thionville",
  beforeImage: "https://customer-assets.emergentagent.com/job_ng-homestaging/artifacts/rmrt58wq_ChatGPT%20Image%2026%20mars%202026%2C%2020_01_42.png",
  afterImage: "https://images.unsplash.com/photo-1613545564259-ede280773613",
  description: "Modernisation d'une cuisine avec touches élégantes et valorisation des volumes.",
  result: "Vendu en 6 semaines",
  priceIncrease: "+7% sur le prix"
}];


export const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Basse-Ham",
    rating: 5,
    text: "Grâce à NG Déco & Habitat, notre maison s'est vendue en moins d'un mois ! La transformation était incroyable et les acheteurs ont eu le coup de cœur dès la première visite.",
    project: "Home staging complet"
  },
  {
    id: 2,
    name: "Marc D.",
    location: "Thionville",
    rating: 5,
    text: "Service professionnel et résultats au-delà de nos attentes. L'équipe a su mettre en valeur notre bien et nous avons vendu 8% au-dessus de notre prix initial.",
    project: "Valorisation immobilière"
  }
];


export const stats = [
{
  number: "95%",
  label: "Des biens vendus en moins de 3 mois"
},
{
  number: "+8%",
  label: "De plus-value moyenne sur le prix de vente"
},
{
  number: "2-4 sem.",
  label: "Délai moyen de transformation"
},
{
  number: "100%",
  label: "De clients satisfaits"
}];


export const benefits = [
{
  title: "Vente Rapide",
  description: "Réduisez considérablement le délai de vente de votre bien grâce à une mise en scène professionnelle.",
  icon: "zap"
},
{
  title: "Valorisation du Prix",
  description: "Augmentez la valeur per\xE7ue de votre bien et r\xE9duisez la n\xE9gociation \xE0 3% du prix du march\xE9.",
  icon: "trendingUp"
},
{
  title: "Coup de Cœur Garanti",
  description: "Créez une émotion positive dès la première visite pour déclencher l'acte d'achat.",
  icon: "heart"
},
{
  title: "Accompagnement Local",
  description: "Une expertise de terrain en Moselle et Luxembourg avec une réactivité immédiate.",
  icon: "mapPin"
}];


export const faqs = [
{
  question: "Qu'est-ce que le home staging ?",
  answer: "Le home staging est une technique de valorisation immobilière qui consiste à mettre en scène votre bien pour le rendre plus attractif aux yeux des acheteurs potentiels. Cela inclut le désencombrement, la dépersonnalisation, l'optimisation de l'espace et une décoration neutre et élégante."
},
{
  question: "Combien coûte une prestation de home staging ?",
  answer: "Le tarif varie selon la surface du bien et l'étendue de la prestation. Nous proposons un devis personnalisé gratuit après une première visite. En moyenne, l'investissement représente 1 à 3% du prix de vente, mais permet souvent une plus-value de 5 à 10%."
},
{
  question: "Combien de temps dure une prestation ?",
  answer: "Une prestation complète de home staging se réalise généralement en 2 à 4 semaines, de la première visite à la mise en scène finale. Pour un coaching déco, comptez 1 à 2 semaines selon vos besoins."
},
{
  question: "Intervenez-vous uniquement en Moselle ?",
  answer: "Nous intervenons principalement en Moselle et au Luxembourg. N'hésitez pas à nous contacter pour tout projet dans ces zones, nous nous déplaçons rapidement."
},
{
  question: "Le home staging garantit-il la vente ?",
  answer: "Si nous ne pouvons garantir la vente à 100%, nos statistiques montrent que 95% de nos biens sont vendus en moins de 3 mois, avec une plus-value moyenne de 8% sur le prix de vente. Le home staging est un investissement rentable qui accélère significativement le processus."
},
{
  question: "Proposez-vous d'autres services complémentaires ?",
  answer: "Oui ! Nous travaillons avec un réseau de partenaires de confiance pour vous proposer : nettoyage professionnel avant shooting, reportage photo professionnel, home organiser, bricoleurs pour petits travaux et réparations, location de mobilier, déménageurs et garde-meubles. Nous coordonnons l'ensemble pour vous faciliter la vie."
}
];


export const images = {
  hero: "https://images.unsplash.com/photo-1613545325268-9265e1609167",
  heroAlt: "https://images.unsplash.com/photo-1760072513357-9d450e935a80",
  about: "https://images.unsplash.com/photo-1772567732955-22e60eaec0ec",
  services: "https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa",
  cta: "https://images.unsplash.com/photo-1772112334897-7e249a9ad811",
  contact: "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg"
};