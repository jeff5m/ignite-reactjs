const path = require('path') // importar usando required pois o webpack roda no node e o node entede apenas esse formato
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool:'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // __dirname se refere ao diretório onde o webpack.config.js está
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
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