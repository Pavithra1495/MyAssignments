//Alert and Frame
import test, { expect } from "@playwright/test";

test("Alert and Frame Interactions",async({page})=>{
page.once('dialog',alertType=>{
    console.log(alertType.message())
    console.log(alertType.type())
    alertType.accept()
})
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.frameLocator("#iframeResult").getByText("Try it").click()
const afterClkMsg=await page.frameLocator("#iframeResult").locator("#demo").innerText()
console.log(afterClkMsg)
await expect(afterClkMsg).toContain("You pressed OK!")

})