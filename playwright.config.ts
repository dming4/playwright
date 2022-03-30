// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 10 * 60 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // // {
    // //   name: 'webkit',
    // //   use: { ...devices['Desktop Safari'] },
    // // },
    // {
    //   name: 'iphone6',
    //   use: { ...devices['iPhone 6 Plus'] },
    // },
  ],
  // reporter: [['list'], ['html', { outputFile: 'test-results.html' }]],
  reporter: [['html', { outputFolder: 'report' }]],
};
export default config;
