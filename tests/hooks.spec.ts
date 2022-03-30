// // example.spec.ts
// import { test, expect } from '@playwright/test';
// import { chromium } from 'playwright';

// test.describe('feature foo', () => {
//   // test.beforeEach(async ({ page }) => {
//   //   // Go to the starting url before each test.
//   //   await page.goto('https://playwright.dev/');
//   // });

//   test.beforeAll(async () => {
//     const { chromium } = require('playwright');
//     const browser = await chromium.launch();
//     const page = await browser.newPage();

//     await page.goto('https://example.com');
//     // await page.goto('https://playwright.dev/');
//   });

//   test('my test1', async ({ page }) => {
//     // Assertions use the expect API.
//     await expect(page).toHaveURL('https://playwright.dev/');
//   });

//   test('my test2', async ({ page }) => {
//     // Assertions use the expect API.
//     await expect(page).toHaveURL('https://playwright.dev/');
//   });
// });

// example.spec.ts
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Before tests1');
});

test('my test1', async ({ page }) => {
  page.on('console', console.log);

  await page.goto('http://example.com/');
});

test('my test2', async ({ page }) => {
  // page.on('console', console.log);

  await page.goto('https://www.baidu.com/');
  // ...
});

test.describe('feature foo', () => {
  test.beforeAll(async () => {
    console.log('beforeAll2');
  });
  test.afterAll(async () => {
    console.log('afterAll2');
  });

  test.beforeEach(async ({ page }) => {
    console.log('beforeEach2 ');
  });
  test.afterEach(async ({ page }) => {
    console.log('afterEach2 ');
  });

  test('sub test1', async ({ page }) => {
    // Assertions use the expect API.
  });
  test('sub test2', async ({ page }) => {
    // Assertions use the expect API.
  });
});

test.afterAll(async () => {
  console.log('After tests1');
});
