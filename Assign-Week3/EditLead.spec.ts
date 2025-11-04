//Edit a Lead
import test, { expect } from "@playwright/test"

test("Create a Lead",async({page})=>{
    const companyName="GHJK"
    const firstName="Jacky"
    const annualIncome="20.00"
    const departmentName="Testing"
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[normalize-space(text())='CRM/SFA']").click()
    await page.locator("//a[text()='Leads']").click()
    await page.getByRole('link', { name: 'Find Leads' }).click();
    await page.locator("[name='firstName']").nth(2).fill(firstName)
    await page.getByRole('button',{name:'Find Leads'}).click()
    await page.locator("//a[text()='11298']").click()
    await page.waitForTimeout(8000)
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill(companyName)
    await page.locator("#updateLeadForm_annualRevenue").fill(annualIncome)
    await page.locator("#updateLeadForm_departmentName").fill("Testing")
    await page.locator("//input[@value='Update']").click()

    const expCompnayName=await page.locator("#viewLead_companyName_sp").innerText()
    const expDepartmentName=await page.locator("#viewLead_departmentName_sp").innerText()
    const expAnnualIncome=await page.locator("#viewLead_annualRevenue_sp").innerText()

    //Validation
    await expect.soft(expCompnayName).toContain(companyName)
    console.log(`Compnay name is presented as expected ${companyName}`)

    await expect.soft(expDepartmentName).toContain(departmentName)
    console.log(`Department name is presented as expected ${departmentName}`)

     await expect.soft(expAnnualIncome).toContain(annualIncome)
    console.log(`Annual Income is presented as expected ${annualIncome}`)
    
})