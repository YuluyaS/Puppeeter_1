const puppeteer = require("puppeteer");
const url = "https://github.com/team";

async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 500 });
};

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");

  //const title = await page.title();
  //console.log(title)
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();

    console.log("title2=");

    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  }, 22000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
    page.evaluate(() => {
      debugger;
    });
  }, 1000);
});
