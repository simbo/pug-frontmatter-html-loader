import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

export default (fixture, options = {}) => {

  const compiler = webpack({
    context: path.join(__dirname, 'fixtures'),
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.pug$/,
        use: [
          'raw-loader',
           path.resolve(__dirname, '../src/index.js')
        ]
      }]
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });

};
