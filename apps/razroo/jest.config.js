module.exports = {
  name: 'razroo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/razroo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
