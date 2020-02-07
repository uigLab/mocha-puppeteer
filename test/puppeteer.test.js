const { expect } = require("chai");
const {
  facebookLogin,
  generatePdf,
  printScreen,
  getDimensions,
  websiteScrap
} = require("../app/puppeteer");

describe("#Puppeteer", function() {
  this.timeout(10000);

  it("should browse and print image", async () => {
    await printScreen();
    expect();
  });
  it("should browse and print PDF", async () => {
    await generatePdf();
    // expect()
  });
  it("should browse and log dimentions", async () => {
    await getDimensions();
    // expect()
  });

  it("should scrap page", async () => {
    const { heading } = await websiteScrap();
    console.log("Test:", heading);
    expect(heading).to.eql("< UI Galaxy />");
  });

  it("should login to facebook", async () => {
    await facebookLogin()
  });
});
