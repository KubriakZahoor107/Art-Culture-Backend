export default {
  testEnvironment: 'node',
  // Ensure Jest treats `.js` files as ES modules so that imports in the server
  // tests are parsed correctly. Without this Jest attempts to parse them as
  // CommonJS which causes "Cannot use import statement outside a module" errors.
  extensionsToTreatAsEsm: ['.js'],
  transform: {},
};
