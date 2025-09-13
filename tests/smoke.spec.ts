import { test, expect } from "@playwright/test";
test("NexusMind renders and is interactive", async ({ page }) => {
  const url = process.env.PREVIEW_URL || "http://localhost:3000";
  await page.goto(url);
  await expect(page.getByText("NexusMind")).toBeVisible();
  // Basic interactivity probe (e.g., open composer if present)
  const composer = page.getByText(/Share your thoughts/i);
  if (await composer.count()) { await composer.first().click(); }
});
