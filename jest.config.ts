import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '((\\.|/)(test|spec))\\.[jt]sx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
