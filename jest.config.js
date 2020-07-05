//------------------------------------------------------------------------------
//
// Jest Configuration, https://jestjs.io/docs/en/configuration
//
//------------------------------------------------------------------------------

module.exports = {
    roots: ["<rootDir>/client"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
