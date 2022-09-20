import { expect, test } from '@playwright/test';

test('form will redirect and display card', async ({ page }) => {
	await page.goto('/');
	expect(await page.locator('input').fill('TorstenDittmann'));
	expect(await page.locator('button').click());
	await page.waitForURL('/TorstenDittmann');
	expect(page.url().endsWith('/TorstenDittmann')).toBeTruthy();
	await page.waitForLoadState('networkidle');
	expect(await page.locator('#maker').count()).toEqual(1);
	expect(await page.locator('input').count()).toEqual(0);
});

test('direct link', async ({ page }) => {
	await page.goto('/TorstenDittmann', {
		waitUntil: 'networkidle'
	});
	expect(await page.locator('#maker').count()).toEqual(1);
	expect(await page.locator('input').count()).toEqual(1);
});

test('unknown username', async ({ page }) => {
	await page.goto('/linux');
	await page.waitForSelector("text=User 'linux' not found");
});
