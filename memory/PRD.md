# PRD - NG Déco & Habitat - Site Web Professionnel

## Informations Générales
**Nom du projet:** Site Web NG Déco & Habitat  
**Date de création:** $(date +%Y-%m-%d)  
**Type:** Site vitrine professionnel - Home Staging  
**Stack:** React (Frontend) + FastAPI (Backend) + MongoDB

## Problème Statement Original
Créer un site internet professionnel moderne et haut de gamme pour NG Déco & Habitat, entreprise de home staging basée à Basse-Ham, Moselle, intervenant en Moselle et Luxembourg.

**Objectif principal:** Générer des leads (appels/demandes de devis) et mettre en valeur l'impact du home staging sur la vente immobilière.

## Informations de l'Entreprise
- **Nom:** NG Déco & Habitat
- **Localisation:** Basse-Ham, Moselle
- **Zone d'intervention:** Moselle et Luxembourg
- **Téléphone:** +33 6 30 21 80 17
- **Email:** ngdeco.habitat@gmail.com
- **Positionnement:** Expert home staging avec vision déco complète, réactivité terrain, positionnement local affirmé

## Charte Graphique
### Palette de Couleurs
- **Or pâle (#D4AF7F):** Accent, logo, boutons CTA
- **Noir doux (#1D1D1D):** Texte, titres
- **Blanc pur (#FFFFFF):** Fond principal
- **Gris clair (#D6D6D6):** Fonds secondaires, séparateurs
- **Taupe clair (#C8BDB2):** Encarts, zones de respiration

### Typographie
- **Titres:** Playfair Display (serif élégant)
- **Corps de texte:** Montserrat (sans-serif moderne)

### Logos
- Logo principal: NG Déco & Habitat (maison stylisée)
- Badge association: Home Staging Brasil (membre associé 2025/2026)

## Architecture du Site

### Structure des Pages
1. **Page d'accueil unique (Single Page Application)**
   - Hero Section
   - Section Statistiques
   - Section À propos
   - Section Services
   - Section Réalisations (Portfolio)
   - Section Témoignages
   - Section FAQ
   - Section Contact
   - Footer

### Composants Développés
- `Header.jsx` - Navigation fixe avec logo
- `HeroSection.jsx` - Section hero avec CTA
- `StatsSection.jsx` - Statistiques clés
- `AboutSection.jsx` - Présentation entreprise
- `ServicesSection.jsx` - 3 services principaux
- `PortfolioSection.jsx` - Galerie avant/après interactive
- `TestimonialsSection.jsx` - Avis clients
- `FAQSection.jsx` - Questions fréquentes (accordion)
- `ContactSection.jsx` - Formulaire de contact
- `Footer.jsx` - Footer avec navigation et contact

## Implémenté (Phase 1 - Frontend avec Mock Data) ✅

### Date: 2025-01-XX

#### Fonctionnalités Complétées
1. **Design & Interface**
   - ✅ Respect strict de la charte graphique
   - ✅ Design responsive (mobile, tablet, desktop)
   - ✅ Header fixe avec navigation smooth scroll
   - ✅ Typographies Google Fonts (Playfair Display + Montserrat)
   - ✅ Palette de couleurs personnalisée (#D4AF7F, #1D1D1D, etc.)
   - ✅ Animations et transitions fluides
   - ✅ Micro-interactions sur boutons et cartes

2. **Sections Principales**
   - ✅ Hero avec overlay, CTA proéminents, badge expertise
   - ✅ Section statistiques avec chiffres clés (95%, +8%, 2-4 sem., 100%)
   - ✅ À propos avec image, badge association, liste bénéfices
   - ✅ Services (3 cartes avec icônes, détails, hover effects)
   - ✅ Portfolio interactif avec :
     * Toggle Avant/Après
     * Navigation entre projets
     * Thumbnails cliquables
     * Indicateurs de progression
     * Affichage des résultats (délai, plus-value)
   - ✅ Témoignages (4 avis avec étoiles, citations, localisations)
   - ✅ FAQ avec accordion Shadcn/UI
   - ✅ Formulaire de contact complet
   - ✅ Footer avec logos, navigation, coordonnées

3. **Images & Assets**
   - ✅ 5 photos réelles client avant/après intégrées
   - ✅ 10 images professionnelles complémentaires (Unsplash/Pexels)
   - ✅ Logo NG Déco & Habitat intégré
   - ✅ Badge association Home Staging Brasil

4. **Mock Data**
   - ✅ Fichier `/app/frontend/src/data/mock.js` créé avec:
     * Informations entreprise
     * 3 services détaillés
     * 4 projets portfolio avec résultats
     * 4 témoignages clients
     * 4 statistiques clés
     * 4 bénéfices
     * 5 FAQ
     * URLs images

5. **Composants UI**
   - ✅ Utilisation Shadcn/UI (Accordion, Sonner pour toasts)
   - ✅ Lucide React pour icônes (pas d'émojis)
   - ✅ Boutons CTA avec effet hover
   - ✅ Cards avec transitions
   - ✅ Inputs avec focus states

## À Implémenter (Phase 2 - Backend & Intégration)

### Fonctionnalités Backend
- [ ] API formulaire de contact
  - Route: `POST /api/contact`
  - Validation des champs (nom, email, téléphone, message)
  - Envoi email notification
  - Stockage leads MongoDB
  
- [ ] Base de données MongoDB
  - Collection `contacts` pour leads
  - Collection `projects` pour portfolio (si gestion CMS future)
  - Collection `testimonials` pour avis clients

- [ ] Intégration Email
  - Service d'envoi (SendGrid, Mailgun, ou SMTP)
  - Template email professionnel
  - Notification admin lors nouveau contact
  - Email confirmation client

### Fonctionnalités Frontend
- [ ] Connexion formulaire au backend
  - Remplacement du mock submission
  - Gestion erreurs API
  - Messages de succès/erreur
  - Validation côté client renforcée

- [ ] Analytics & Tracking
  - Google Analytics ou alternative
  - Tracking conversions (soumissions formulaire)
  - Heatmaps (optionnel)

### Optimisations
- [ ] SEO
  - Méta tags optimisés
  - Schema.org markup (LocalBusiness)
  - Sitemap.xml
  - robots.txt
  
- [ ] Performance
  - Lazy loading images
  - Optimisation images (WebP)
  - Minification assets
  
- [ ] Accessibilité
  - ARIA labels
  - Contraste couleurs (déjà respecté)
  - Navigation clavier

## Features P0 (Critiques)
- ✅ Page d'accueil responsive
- ✅ Formulaire de contact (frontend)
- [ ] Backend formulaire de contact
- [ ] Envoi email automatique

## Features P1 (Importantes)
- ✅ Portfolio avant/après interactif
- ✅ Section témoignages
- [ ] SEO optimisation
- [ ] Google Analytics

## Features P2 (Nice to have)
- [ ] Blog/Actualités
- [ ] Espace admin pour gérer portfolio
- [ ] Système de prise RDV en ligne
- [ ] Chat en direct
- [ ] Multilingue (FR/EN pour Luxembourg)

## Technologies Utilisées

### Frontend
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn/UI components
- Lucide React (icônes)
- Axios (API calls)
- Sonner (toasts)

### Backend (à développer)
- FastAPI
- Motor (MongoDB async)
- Pydantic (validation)
- Python-multipart (form data)

### Fonts
- Google Fonts: Playfair Display, Montserrat

## Notes Techniques

### Structure Fichiers Frontend
```
/app/frontend/src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── StatsSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── PortfolioSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── FAQSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── ui/ (Shadcn components)
├── pages/
│   └── Home.jsx
├── data/
│   └── mock.js
├── App.js
├── App.css
└── index.css
```

### Contrat API (À Développer)

#### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "propertyType": "appartement|maison|local-commercial|autre",
  "message": "string"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Votre demande a été envoyée avec succès",
  "contact_id": "string"
}
```

**Response Error (400/500):**
```json
{
  "success": false,
  "error": "string",
  "details": {}
}
```

## Prochaines Étapes

### Immédiat
1. Validation client du design frontend
2. Développement backend API contact
3. Intégration email service
4. Tests end-to-end formulaire

### Court terme
- Optimisation SEO
- Analytics setup
- Tests multi-navigateurs
- Tests performances

### Moyen terme
- Système de gestion contenu (CMS) pour portfolio
- Module blog
- Optimisations conversion (A/B testing)

## Références
- Charte graphique fournie par client
- Images réelles: 5 photos avant/après
- Logo et badge association fournis
- Contact: ngdeco.habitat@gmail.com | +33 6 30 21 80 17
