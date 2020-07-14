module.exports = {
  name: 'example-app-shared-state-user',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/example-app/shared/state/user',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
