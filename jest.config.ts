import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(png|jpeg|svg)$": "jest-static-stubs",
  },
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
