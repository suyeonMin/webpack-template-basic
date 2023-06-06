//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry : './js/main.js',
    output : {
        // path : path.resolve(__dirname, 'dist'), 
        // filename : 'main.js',
        clean : true
    },

    module : {
        rules : [
            {
                //정규표현식. .css로 끝나는 확장자 찾아라.(.css 혹은 .scss. ?는 앞글자가 있을수도 없을수도 있다는 뜻.)
                test : /\.s?css$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.js$/,
                use : [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin({
            patterns : [
                { from : 'static'}
            ]
        })
    ],

    devServer : {
        //이거는 개발서버 경로 이상하게 열릴 경우 설정하면 됨.
        host : 'localhost'
    }
}