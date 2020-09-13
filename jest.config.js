module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: ['<rootDir>/{examples,packages,plugins,themes}/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx'],
};
