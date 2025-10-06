import { expect, test } from "@playwright/test";

test("Clicks Add Entry Button", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const addEntryBtn = page.getByTestId("add-entry-btn");
  await addEntryBtn.click();

  await expect(page.getByTestId('goback-btn')).toBeVisible()
});
