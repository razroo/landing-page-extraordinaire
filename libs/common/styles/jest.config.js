module.exports = {
  name: 'common-styles',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/styles',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
