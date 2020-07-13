module.exports = {
  name: 'example-app-layout-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/example-app/layout-feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
