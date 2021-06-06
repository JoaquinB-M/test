const path = require('path');

module.exports = {
         externals: {
         react: "React",
        "react-dom": "ReactDOM",
    },

    entry: { fileJs: '/src/index.js',
             Boton: '/src/Boton.js'},
    output: {
        path: path.join(__dirname + '/dist'),
        
    },
    module: { rules: 
        [ { 
            test: /\.js$/, 
            exclude: /(node_modules|bower_components)/, 
            use: { loader: 'babel-loader', 
            options: { presets: ['env', 'react'] } } 
        } ] 
    } 


}

