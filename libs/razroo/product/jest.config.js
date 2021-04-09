module.exports = {
  name: 'razroo-product',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/razroo/product',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
