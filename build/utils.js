const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageConfig = require('../package.json');
const notifier = require('node-notifier');

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ?
      [cssLoader, postcssLoader, resolveUrlLoader] :
      [cssLoader, resolveUrlLoader];

    const currentOptions = Object.assign({}, loaderOptions, {
      sourceMap: options.sourceMap,
      includePaths: options.includePaths
    });

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: currentOptions
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    let ret = null;
    if (options.extract) {
      ret = ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      });
    } else {
      ret = ['vue-style-loader'].concat(loaders);
    }
    return ret;
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass')
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = [];
  const loaders = exports.cssLoaders(options);

  Object.keys(loaders).forEach((extension) => {
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loaders[extension]
    });
  });

  return output;
};

exports.createNotifierCallback = function () {
  return (severity, errors) => {
    if (severity !== 'error') return;

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: `${severity}:${error.name}`,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    });
  };
};
