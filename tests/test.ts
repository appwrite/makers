import { expect, test } from '@playwright/test';

test('index page available', async ({ page }) => {
	await page.goto('/');
	expect(await page.locator('input').fill('TorstenDittmann'));
	expect(await page.locator('button').click());
	await page.waitForURL('/TorstenDittmann');
	expect(page.url().endsWith('/TorstenDittmann')).toBeTruthy();
	await page.waitForLoadState('networkidle');
	expect(await page.locator('#maker').count()).toEqual(1);
});
