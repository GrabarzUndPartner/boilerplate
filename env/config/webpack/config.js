const path = require('upath');
const devtool = {
  development: 'eval-source-map',
  production: 'source-map'
};
const mode = {
  development: 'none',
  production: 'production'
};

module.exports = function (dest) {
  const config = {
    mode: mode[process.env.NODE_ENV],
    devtool: devtool[process.env.NODE_ENV],
    optimization: {
      minimize: true
    },
    plugins: require('./plugins')(dest).reduce(reduceList, []),
    module: {
      rules: require('./loaders').reduce(reduceList, [])
    },
    resolve: {
      modules: [
        path.resolve(process.cwd(), '/src/js'), 'node_modules'
      ],
      alias: {
        jquery: 'jquery/src/core.js'
      }
    }
  };

  return config;
};

function reduceList (result, item) {
  if (item[process.env.NODE_ENV]) {
    result.push(item.config);
  }
  return result;
}
