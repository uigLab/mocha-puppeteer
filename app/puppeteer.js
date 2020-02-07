const puppeteer = require("puppeteer");
require("dotenv").config();

const facebookLogin = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.facebook.com/");

  const emailInput = "#email";
  const passwordInput = "#pass";
  const submitSelector = "#u_0_b";

  linkEmail = await page.$(emailInput);
  linkPassword = await page.$(passwordInput);
  linkSubmit = await page.$(submitSelector);

  await linkEmail.click();
  await linkEmail.type(process.env.FB_EMAIL); // add the email address for linkedin //

  await linkPassword.click();
  await linkPassword.type(process.env.FB_PASS); // add password for linkedin account

  await linkSubmit.click();
  await page.screenshot({ path: "facebook.png" });
  await browser.close();
};

const generatePdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com", {
    waitUntil: "networkidle2"
  });
  await page.pdf({ path: "hn.pdf", format: "A4" });

  await browser.close();
};


const websiteScrap = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://uigalaxy.com/", {
    waitUntil: "networkidle2"
  });

  const HEADING_SELECTOR = "h1";

  let heading;

  await page.waitFor(HEADING_SELECTOR);
  heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);

  await browser.close();

  return { heading };
};

const printScreen = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://uigalaxy.com");
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
};


const  getDimensions = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      };
    });

    console.log("Dimensions:", dimensions);
};


module.exports = {
  facebookLogin,
  generatePdf,
  printScreen,
  websiteScrap,
  getDimensions
};
