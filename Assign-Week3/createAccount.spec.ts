//Create a new account

import test, { expect } from "@playwright/test";

test("Create a new account",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel("username").fill("pavikalai15857@agentforce.com")
    await page.getByLabel("password").fill("Pavithra@123")
    await page.click('#Login')
    const afterLoginTitle=await page.locator("//span[@title='Marketing CRM Classic']").innerText()
    await expect(page).toHaveTitle('Home | Salesforce')
    await expect.soft(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
    // await expect(afterLoginTitle).toBe("Marketing CRM Classic")
    // console.log("Login successfully completed"+afterLoginTitle)
    await page.locator("//button[@title='App Launcher']").click()
    await page.getByText("View All").click()
    await page.waitForTimeout(4000)
    // await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator(".slds-input").fill("Service")
    await page.locator("//div[@class='slds-truncate']").nth(0).click()
    await page.locator("[href='/lightning/o/Account/home']").click()
    await page.getByRole("button", {name:"New"}).click()
    await page.locator("[name='Name']").fill('Playwright')
    await page.locator("//button[text()='Save']").click()
    await expect(page.locator('.forceToastMessage')).toContainText('was created')
})



