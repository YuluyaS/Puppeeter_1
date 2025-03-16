const puppeteer = require("puppeteer");

const url = "https://netology.ru";

async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 1000 });
};

let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    await page.goto("https://netology.ru");
  });

  //describe('Долгие тесты', function() { this.timeout(5000);

  test1("The first link text 'Медиа'", async () => {
    //page = await browser.newPage();
    //await page.goto("https://netology.ru");

    const expected = "Медиа Нетологии";

    const actual = await page.Seval(
      "a[class='styles_linkDZZ1o']",
      (link) => link.textContent
    );
    expect(actual).toContain(expected);
    //page.close();
  });

  test1("The first link leads on 'Медиа' page", async () => {
    //page = await browser.newPage();
    //await page.goto("https://netology.ru");

    const expected = "Медиа Нетологии: об образовании в диджитале";

    await page.click("a[class='styles_link_DZZ1o']");
    const actual = await page.title();
    expect(actual).toEqual(expected);
    //page.close();
  });
});

test1("The h1 should contain 'Работа'", async () => {
  const expected = "Работа";
  await page.goto("https://netology.ru/job");
  const actual = await page.$eval(
    "h1.presentation_titleIXgqx",
    (link) => link.textContent
  );

  await page.evaluate(() => {
    debugger;
  });

  expect(actual).toContain(expected);
});
