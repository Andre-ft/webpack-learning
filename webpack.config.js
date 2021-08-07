const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
     devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
         port: 9000,
         open: true,
         liveReload: true,
         watchContentBase: true,
         hot: false,
        stats: 'errors-only',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
      }],
  }, 
};

// string = 'production': 'none' | 'development' | 'production'