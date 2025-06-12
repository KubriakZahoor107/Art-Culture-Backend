export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.js', '.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
