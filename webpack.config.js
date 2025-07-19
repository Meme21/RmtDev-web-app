const MiniCssExtractPlugin =require('mini-css-extract-plugin');

module.exports ={
    mode:'production',
    entry: './src/index.js',
    output: {
        filename : 'main.js'
    } 
    ,
    module :{
        rules: [
            {
            test: /\.css$/ , //RE
            use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']  
            }
          
        ]
    } ,
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};