module.exports = {
  name: 'example-app-auth-feature-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/example-app/auth-feature/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
