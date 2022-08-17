const path = require('path') // importar usando required pois o webpack roda no node e o node entede apenas esse formato

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // __dirname se refere ao diretório onde o webpack.config.js está
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, // verifica se o arquivo é um arquivo javascript
                exclude: /node_modules/,
                use: 'babel-loader', // integração entre o babel e o webpack
            }
        ],
    }
};