const path = require('path');

module.exports = {
  mode:'development',
  entry: "./app.js", 
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        "loader":"babel-loader",
        "test":/\.js$/,
        "exclude": path.join(__dirname,'node_modules')
      },
      {
        "use":[// Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader'],
        "test":/\.scss$/
      },
      {
        "use":[
        'style-loader',
        'css-loader'],
        "test":/\.css$/
      }
    ]
  },
  devServer:{
    contentBase:path.join(__dirname,"public"),
    port:5000,
    historyApiFallback:true
  }
}