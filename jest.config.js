module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/jest'],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"],
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/fileTransformer.js'
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: { 
      "\\.(css|styl|less|webp|sass|scss|svg|gif|png|mp4|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
  };
