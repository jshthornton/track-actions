module.exports = {
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon.js'
    }
  },
  module: {
    noParse: [
      /node_modules\/sinon/,
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        //include: [
          //path.resolve(__dirname, 'lib')
        //]
      }
    ]
  }
};