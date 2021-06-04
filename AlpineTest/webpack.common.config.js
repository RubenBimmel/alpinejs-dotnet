const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'wwwroot/statics'),
        filename: 'main.js',
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                loader: "ts-loader" 
            },
            { 
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    }
};