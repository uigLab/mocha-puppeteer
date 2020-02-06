const { expect } = require("chai");
const puppeteer = require("puppeteer");
const { generatePdf, printScreen, getDimensions, websiteScrap } = require("../app");

// describe("#Puppeteer", function () {
// this.timeout(10000);

// it("should browse and print image", async () => {
//   await printScreen();
//   expect()
// })
// it("should browse and print PDF", async () => {
//   await generatePdf();
//   // expect()
// })
// it("should browse and log dimentions", async () => {
//   await getDimensions();
//   // expect()
// })

// it("browses the website", async function testBrowser() {
//   const { title, outerHTML } = await getData();
//   this.title = title;
//   this.outerHTML = outerHTML;
// });

// it("title has text: example", async function testTitle() {
//   expect(this.title.toLowerCase()).to.have.string("example");
// });

// it("outerHTML has text: example", async function testOuterHTML() {
//   expect(this.outerHTML.toLowerCase()).to.have.string("example");
// });
// });


describe("Test for facebook Login functionality", async function() {
  this.timeout(30000);
  it("should scrap page", async()=> {
    const {heading} = await websiteScrap();
    console.log("Test:", heading);
    expect(heading).to.eql("< UI Galaxy />");

  })

  // it("should login to home page", async () => {
  //   const browser = await puppeteer.launch({ headless: false });
  //   const page = await browser.newPage();
  //   await page.goto("https://www.facebook.com/");
  //   /* simple test case */
  //   const emailInput = "#email";
  //   const passwordInput = "#pass";
  //   const submitSelector = "#u_0_b";

  //   linkEmail = await page.$(emailInput);
  //   linkPassword = await page.$(passwordInput);
  //   linkSubmit = await page.$(submitSelector);

  //   await linkEmail.click();
  //   await linkEmail.type("a.rakib420@gmail.com"); // add the email address for linkedin //

  //   await linkPassword.click();
  //   await linkPassword.type("01912083883Raqib"); // add password for linkedin account

  //   await linkSubmit.click();
  //   await page.screenshot({ path: "facebook.png" });
  //   await browser.close();
  // });
});
