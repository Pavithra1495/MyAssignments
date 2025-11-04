//Create a Lead
import test, { expect } from "@playwright/test"

test("Create a Lead",async({page})=>{
    const companyName="ABCD"
    const firstName="Jacky"
    const lastName="John"
    const status="Assigned"
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[normalize-space(text())='CRM/SFA']").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill(companyName)
    await page.locator("#createLeadForm_firstName").fill(firstName)
    await page.locator("#createLeadForm_lastName").fill(lastName)
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")
    await page.locator("#createLeadForm_annualRevenue").fill("15LPA")
    await page.locator("#createLeadForm_generalProfTitle").fill("IT_Details")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9875478909")
    await page.locator("[name='submitButton']").click()

    //Validation
    //Auto-Retry Assertions:
    const expCompnayName=await page.locator("#viewLead_companyName_sp").innerText()
    const expFirstName=await page.locator("#viewLead_firstName_sp").innerText()
    const expLastName=await page.locator("#viewLead_lastName_sp").innerText()
    const expStatus=await page.locator("#viewLead_statusId_sp").innerText()

    await expect.soft(expCompnayName).toContain(companyName)
    console.log(`Compnay name is presented as expected ${companyName}`)
   
    await expect.soft(expFirstName).toContain(firstName)
    console.log(`First name is presented as expected ${firstName}`)
   
    await expect.soft(expLastName).toContain(lastName)
    console.log(`LastName is presented as expected ${lastName}`)

    await expect.soft(expStatus).toContain(status)
    console.log(`Status ID is presented as expected ${status}`)

   // Non-Retrying Assertions:
    await expect.soft(expCompnayName).toContain(companyName)
    console.log(`Compnay name is presented as expected ${companyName}`)

    await expect.soft(expFirstName).toBe(firstName)
    console.log(`First name is presented as expected ${firstName}`)

    await expect.soft(expLastName).toBe(lastName)
    console.log(`LastName is presented as expected ${lastName}}`)

    await expect.soft(expStatus).toBe(status)
    console.log(`Status ID is presented as expected ${status}`)
})