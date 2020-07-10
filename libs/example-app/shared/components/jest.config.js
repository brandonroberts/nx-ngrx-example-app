module.exports = {
  name: 'example-app-shared-components',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/example-app/shared/components',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
