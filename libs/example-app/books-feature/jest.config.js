module.exports = {
  name: 'example-app-books-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/example-app/books-feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
