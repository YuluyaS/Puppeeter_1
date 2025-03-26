const puppeteer = require("puppeteer");
const url = "https://github.com/team";

async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 500 });
};

let page;

beforeEach(async () => {
  page = await browser.newPage();
  //await page.goto("https://github.com/team");

  //const title = await page.title();
  //console.log(title)
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();

    console.log("title2=");

    //expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
    expect(title2).toEqual(
      "GitHub · Build and ship software on a single, collaborative platform · GitHub"
    );
  }, 30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 14000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    //expect(actual).toContain("Sign up for free");
    expect(actual).toContain("Get started with Team");
    page.evaluate(() => {
      debugger;
    });
  }, 19000);
});

test("The title should equal 'GitHub Features · GitHub' ", async () => {
  await page.goto("https://github.com/features");

  const actual = await page.title();

  expect(actual).toEqual("GitHub Features · GitHub");
}, 10000);

test("The title should equal 'GitHub Codespaces · GitHub' ", async () => {
  await page.goto("https://github.com/features/codespaces");

  const actual = await page.title();

  expect(actual).toEqual("GitHub Codespaces · GitHub");
}, 10000);

test("The title should equal 'GitHub Actions · GitHub' ", async () => {
  await page.goto("https://github.com/features/actions");

  const actual = await page.title();

  expect(actual).toEqual("GitHub Actions · GitHub");
}, 10000);
