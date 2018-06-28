# Producer Webapp Prototype
## Prototype de validation de l'API d'une blockchain
#### Accès identifié par le service Auth0

## Outils utilisés
- Vue.js
- vue-router
- vuex (Data Store)
- auth0.js : Bibliothèque javascript du service Auth0
- Webpack
- Docker

## Procédure d'installation

### Préalable
Ajouter dans le fichier hosts la ligne suivante :
127.0.0.1 scenso.local
### Installation des dépendances
npm install
### Lancement de l'application en mode développement avec hot reload
npm run dev

## Commentaires

### Mise en place des styles modulaires
- Le loader resolveUrlLoader de webpack permet d'utiliser les alias définis dans resolve pour les imports dans les fichier scss (voir vendors/fontawesome).
- L'import des styles du coeur dans les modules est rendu possible par l'utilisation du paramètre includePaths dans les options des loaders de styles (css-loader, less-loader, sass-loader).
- Le fichier principal du coeur est nommé core.scss pour ne pas entrer en conflit avec les fichiers main.scss des modules.
