module.exports = {
  name: 'common-typings',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/typings',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
