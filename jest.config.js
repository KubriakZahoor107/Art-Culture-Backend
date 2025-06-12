export default {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.js', '.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { useESM: true }],
  },
};
