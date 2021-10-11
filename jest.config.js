module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^@/api/(.*)': '<rootDir>/src/api/$1',
    '^@/assets/(.*)': '<rootDir>/src/assets/$1',
    '^@/components/(.*)': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@/i18n/(.*)': '<rootDir>/src/i18n/$1',
    '^@/navigation/(.*)': '<rootDir>/src/navigation/$1',
    '^@/providers/(.*)': '<rootDir>/src/providers/$1',
    '^@/screens/(.*)': '<rootDir>/src/screens/$1',
    '^@/services/(.*)': '<rootDir>/src/services/$1',
    '^@/styles/(.*)': '<rootDir>/src/styles/$1',
    '^@/utilities/(.*)': '<rootDir>/src/utilities/$1',
  },
};
