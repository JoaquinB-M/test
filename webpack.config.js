const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "none",
      module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
      }
    ],
  },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
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

