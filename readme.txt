# Site Web "On regarde de plus près : l'IA Générative"

## Description
Site vitrine high-tech zen présentant l'actualité et les progrès récents dans le domaine de l'IA générative et des modèles de langage (LLM).

## Structure du site
- index.html : Page d'accueil avec les 7 derniers articles
- archives.html : Liste de tous les articles publiés
- about.html : Page À propos présentant la mission du site
- contact.html : Formulaire de contact
- style.css : Feuille de style principale
- script.js : Script JavaScript pour les fonctionnalités dynamiques
- data/articles.json : Fichier de données contenant les articles
- logo.svg : Logo du site
- favicon.ico : Icône du site

## Hébergement

### Options recommandées :
1. Netlify (recommandé)
   - Déployez simplement en faisant glisser le dossier sur netlify.com
   - Hébergement gratuit avec HTTPS
   - Déploiements continus depuis GitHub

2. GitHub Pages
   - Créez un dépôt GitHub
   - Activez GitHub Pages dans les paramètres
   - Hébergement gratuit

3. Vercel
   - Similaire à Netlify
   - Déploiement gratuit pour projets personnels

## Mise à jour hebdomadaire

### Processus de mise à jour :
1. Exécutez le prompt IA suivant chaque semaine :
   "Donne les 5 actualités majeures de la semaine dans le domaine de l'IA générative et des modèles de langage (LLM). Rédige un résumé clair et neutre (~300 mots par article) avec titre, date, résumé, source vérifiée (lien), et une image libre de droit (Unsplash/Pexels). Retourne la sortie en JSON au format prévu."

2. Ajoutez les nouveaux articles au fichier data/articles.json
   - Assurez-vous que chaque article a un ID unique
   - Les articles doivent être triés par date (du plus récent au plus ancien)

3. Déployez la nouvelle version du site

### Sources fiables à surveiller :
- OpenAI, Anthropic, Mistral, DeepMind, Meta, Hugging Face, DeepSeek

## Personnalisation
- Modifiez style.css pour changer l'apparence du site
- Ajustez les couleurs dans la section :root de style.css
- Modifiez le contenu des pages HTML selon vos besoins

## Notes techniques
- Le site utilise JavaScript vanilla (pas de framework)
- Compatible avec tous les navigateurs modernes
- Design responsive (s'adapte aux mobiles et tablettes)
- Les images sont chargées depuis Unsplash (libres de droit)