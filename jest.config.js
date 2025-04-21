module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest" // Use Babel to transform JavaScript and JSX files
  },
  testEnvironment: "jest-environment-jsdom" // Explicitly reference the installed package
};
