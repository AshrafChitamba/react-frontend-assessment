import { expect, test } from "@playwright/test";

const pageUrl = "http://localhost:5173/";

test("Clicks Add Entry Button", async ({ page }) => {
  await page.goto(pageUrl);

  const addEntryLink = page.getByTestId("add-entry-link");
  await addEntryLink.click();

  await expect(page.getByTestId("goback-btn")).toBeVisible();
});

test("Adds a new knowledge entry", async ({ page }) => {
  await page.goto(pageUrl);

  const addEntryLink = page.getByTestId("add-entry-link");
  await addEntryLink.click();

  const titleInput = page.getByPlaceholder("Title");
  const descriptionInput = page.getByPlaceholder("Description");
  const submitEntryBtn = page.getByTestId("submit-entry-btn");

  await titleInput.fill("This is a test title");
  await descriptionInput.fill("This is a test description");
  await submitEntryBtn.click();

  await page.waitForURL(pageUrl);

  await expect(page.getByText("This is a test title")).toBeVisible();
  await expect(page.getByText("This is a test description")).toBeVisible();
});

test("Deletes a knowledge entry", async ({ page }) => {
  await page.goto(pageUrl);

  const deleteEntryBtn = page.getByTestId("delete-entry-btn").last();
  await deleteEntryBtn.click();

  await expect(page.getByText("Are you sure?")).toBeVisible();

  const confimDeleteEntryBtn = page.getByTestId("confirm-delete-entry-btn");
  await confimDeleteEntryBtn.click();

  await expect(page.getByText("This is a test title")).not.toBeVisible();
  await expect(page.getByText("This is a test description")).not.toBeVisible();
});
