import { test, expect } from '@playwright/test';

const main_url = 'http://localhost:5173/forms';

test('Forms (React)', async ({ page }) => {
  const title = /Forms - React/;
  const field_name = '#fp-field-name';
  const field_street = '#fp-field-street';
  const field_phone = '#fp-field-phone';
  const btn_submit = '#fp-btn-submit';

  const iterations = 100;

  await page.goto(main_url);
  await expect(page).toHaveTitle(title);

  for(let i = 0; i < iterations; i++) {
      
    await page.locator(field_name).fill('Peter' + i);
    await page.locator(field_street).fill('Goethestr. ' + i);
    await page.locator(field_phone).fill('0157342194443');

    await page.locator(btn_submit).click();
  }
});
