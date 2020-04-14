module.exports = {
  name: 'books-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/books/ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
