//------------------------------------------------------------------------------
//
// Jest Configuration, https://jestjs.io/docs/en/configuration
//
//------------------------------------------------------------------------------

module.exports = {
    roots: ["<rootDir>/src"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
