module: {
    rules: [
      {
        test: /(\.js[\S]{0,1})$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/proposal-class-properties']
        },
      }
    ]
}