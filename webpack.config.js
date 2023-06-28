const fs = require('fs');

module.exports = {
  entry: {
    ...buildEntries('./lambdas'),
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/artifacts',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: false,
  },
  externals: ['@aws-sdk/client-sqs', 'serverless-iam-roles-per-function'],
};

// Build webpack entries by folder path
function buildEntries(path) {
  const files = fs.readdirSync(path) || [];
  return files?.reduce((accumulator, currentValue) => {
    const name = currentValue?.split('.')?.[0];
    if (!name) return accumulator;
    return { ...accumulator, [name]: `${path}/${currentValue}` };
  }, {});
}
