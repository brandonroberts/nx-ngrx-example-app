module.exports = {
  name: 'example-app-data-access-books',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/example-app/data-access/books',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
