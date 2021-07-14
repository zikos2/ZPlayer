module.exports={
  entry:'./app/App.js',
  output:{
    filename:'./js/bundle.js'
  },
  target: 'electron-main',
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react','@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: "development",
}
