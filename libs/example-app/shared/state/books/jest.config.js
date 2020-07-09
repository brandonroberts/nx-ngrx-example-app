module.exports = {
  name: 'example-app-shared-state-books',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/example-app/shared/state/books',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
