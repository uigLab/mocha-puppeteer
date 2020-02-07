const puppeteer = require("puppeteer");
const { expect } = require("chai");
require("dotenv").config();

describe("#Puppeteer with Facebook", function() {
  // Set timeout to infinite
  this.timeout(0);

  let browser;
  let page;
  let loggedIn;

  it("Should open browser", async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    });
  });

  it("Should open new page", async () => {
    page = await browser.newPage();
  });

  it("Should load facebook login page", async () => {
    const response = await page.goto("https://www.facebook.com/login/", {
      timeout: 0,
      waitUntil: "domcontentloaded"
    });
    expect(response.status()).to.equal(200);
  });

  it("Should generate screenshot of facebook homepage", async () => {
    await page.screenshot({ path: "facebook-login.png" });
  });

  it("Should login facebook successfully", async () => {
    const emailInput = "#email";
    const passwordInput = "#pass";
    const submitSelector = "#loginbutton";

    await page.type(emailInput, process.env.FB_EMAIL); // email address for facebook in .env file //
    await page.type(passwordInput, process.env.FB_PASS); // password for facebook account in .env file

    // await linkSubmit.click();
    await page.click(submitSelector);
    await page.waitForNavigation();

    // Test if we logged in properly
    try {
      await page.waitForSelector("#bluebarRoot", { timeout: 10000 });
      loggedIn = true;
    } catch (err) {
      loggedIn = false;
    }
    expect(loggedIn).to.true;
  });
  it("Should take screenshot of facebook timeline", async () => {
    if (loggedIn) {
      await page.screenshot({ path: "timeline.png" });
    }
    expect(loggedIn).to.true;
  });

  it("Browser Closes Successfully", async () => {
    await browser.close();
  });
});
