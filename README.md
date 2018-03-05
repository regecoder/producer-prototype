# Scenso Producer web

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Mise en place des styles modulaires
- Le loader resolveUrlLoader de webpack permet d'utiliser les alias définis dans resolve pour les imports (voir vendors/fontawesome).
- L'import des styles du coeur dans les modules est rendu possible par l'utilisation du paramètre includePaths dans les options des loaders de styles (css-loader, less-loader, sass-loader).
- Le fichier principal du coeur est nommé core.scss pour ne pas entrer en confilt avec les fichiers main.scss des modules.
