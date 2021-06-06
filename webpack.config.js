const path = require('path');

module.exports = {
    mode: "none",
      module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
    externals: {
         react: "React",
        "react-dom": "ReactDOM",
    },
    entry: { fileJs: '/src/index.js',
             Boton: '/src/Boton.js'
    },
    output: {
        path: path.join(__dirname + '/dist'),
    },
}

