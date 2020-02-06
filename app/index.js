const puppeteer = require("puppeteer");

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

  console.log(heading)

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


const getData = async () => {
  const browser = await puppeteer.launch({
    // will greatly affect the results
    headless: true,
    // important for running on various server where root user is present
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  // actual navigation happens here
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // sample data collection
  const title = await page.title();
  const outerHTML = await page.evaluate(
    () => document.querySelector("head").outerHTML
  );
  // cleanup once done
  await browser.close();
  return { title, outerHTML };
};

module.exports = {
  generatePdf,
  printScreen,
  websiteScrap,
  getDimensions,
  getData
};
