// import { test, expect } from '@playwright/test';

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });

// example.spec.ts
import { test, expect } from '@playwright/test';
// const { firefox } = require('playwright');

test('my test', async ({ page, browser, context, browserName }) => {
  await page.goto('https://playwright.dev/');
  page.on('console', console.log);

  // var _context = await browser.newContext();
  // var _page = await _context.newPage();
  // await _page.goto('https://example.com');

  // console.log(page, 'page');
  // console.log(browser, 'browser');
  // console.log(context, 'context');
  // console.log(browserName, 'browserName');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

  await page.click('text=Get Started');
  console.log('click');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=Introduction').first()).toBeVisible();

  await delay(60);
});

function delay(seconds) {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, seconds * 1000);
  });
}
