import { test, expect } from '@playwright/test';

// Illustrative example from QA Meets LLM, episode 2.
// Adapt the URL, locators and data setup to your app before running.
// `createResetLink` is a placeholder for your own API helper.
async function createResetLink(): Promise<string> {
  // TODO: create a valid reset link via your test API
  throw new Error('Implement createResetLink() for your app');
}

test.describe('Password reset', () => {
  test('TC-04 rejects a 7-character password (AC2)', async ({ page }) => {
    await page.goto(await createResetLink());
    await page.getByLabel('New password').fill('Abc12!x');
    await page.getByRole('button', { name: 'Reset password' }).click();

    await expect(page.getByRole('alert')).toHaveText(/at least 8 characters/i);
    await expect(page).toHaveURL(/\/reset/);
  });

  test('TC-01 accepts an 8-character password (AC2)', async ({ page }) => {
    await page.goto(await createResetLink());
    await page.getByLabel('New password').fill('Abc12!xy');
    await page.getByRole('button', { name: 'Reset password' }).click();

    await expect(page.getByRole('status')).toHaveText(/password has been reset/i);
  });

  test('TC-07 reset link expires after 30 minutes (AC1)', async ({ page }) => {
    // Browser clock only. If expiry is checked on the server,
    // create an already-expired token through your API instead.
    await page.clock.install();
    await page.goto(await createResetLink());

    await page.clock.fastForward('31:00');
    await page.getByLabel('New password').fill('ValidPass123!');
    await page.getByRole('button', { name: 'Reset password' }).click();

    await expect(page.getByRole('alert')).toHaveText(/link has expired/i);
  });
});
