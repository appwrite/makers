import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.route('https://appwrite.io/cards/makers/**', (route) => {
		const headers = { 'access-control-allow-origin': '*' };
		if (new URL(route.request().url()).pathname.endsWith('/linux')) {
			return route.fulfill({ status: 404, headers });
		}
		return route.fulfill({ status: 200, headers, path: 'src/lib/walter.png' });
	});
});

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

test('changing username on the maker page updates the card', async ({ page }) => {
	await page.goto('/TorstenDittmann', { waitUntil: 'networkidle' });
	await expect(page).toHaveTitle("TorstenDittmann's Maker Card");
	await page.locator('input').fill('linux');
	await page.locator('button[type=submit]').click();
	await page.waitForURL('/linux');
	await expect(page).toHaveTitle("linux's Maker Card");
	await expect(page.getByRole('link', { name: 'Tweet it' })).toHaveAttribute(
		'href',
		/makers\.appwrite\.io\/linux$/
	);
	await page.waitForSelector("text=User 'linux' not found");
});
