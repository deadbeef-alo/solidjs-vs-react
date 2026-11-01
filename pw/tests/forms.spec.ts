import { test, expect, Page } from '@playwright/test';

const iterations = 100;

const react_port = '5173';
const solid_port = '3000';
let url: string;
let title: RegExp;

const field_name = '#fp-field-name';
const field_street = '#fp-field-street';
const field_phone = '#fp-field-phone';
const btn_submit = '#fp-btn-submit';

test('Forms (SolidJS)', async ({ page }) => {
  url = 'http://localhost:' + solid_port + '/forms'
  title = /Forms - Solid App/;
});

test('Forms (React)', async ({ page }) => {
  url = 'http://localhost:' + react_port + '/forms'
  title = /Forms - React/;
});

test.afterEach(async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(title);

  for(let i = 0; i < iterations; i++) { 
    await page.locator(field_name).fill('Peter' + i);
    await page.locator(field_street).fill('Goethestr. ' + i);
    await page.locator(field_phone).fill('0157342194443');
    await page.locator(btn_submit).click();
  }
});