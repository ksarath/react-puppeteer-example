import puppeteer from "puppeteer";

describe("Application", () => {
  let browser;
  let page;

  const mockResponseObject = [
    {
      id: 1,
      text: 'How to Mock a Cat',
      author: 'A. Friend'
    }
  ];

  beforeAll(async () => {
    jest.setTimeout(100000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false,
      args: [
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-web-security',
        '--disable-features=IsolateOrigins',
        '--disable-site-isolation-trials'
      ]
    });
    page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.url() === 'https://cat-fact.herokuapp.com/facts') {
        request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockResponseObject)
        })
      } else request.continue()
    });
  });

  it("contains routes", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App");
    const text1 = await page.$eval(".App", (e) => e.textContent);
    expect(text1).toContain("Home");
    expect(text1).toContain("Learn react");
    expect(text1).toContain("Facts about cats");
  });

  it("contains the welcome text for learn react", async () => {
    await page.goto("http://localhost:3000/learn-react");
    await page.waitForSelector(".App-logo");
    const text1 = await page.$eval(".App-welcome-text", (e) => e.textContent);
    expect(text1).toContain("Edit src/App.js and save to reload.");

    await page.click(".App-link");
    await page.waitForSelector("#gatsby-focus-wrapper");
    const text2 = await page.$eval("#gatsby-focus-wrapper", (e) => e.textContent);
    expect(text2).toContain("A JavaScript library for building user interfaces");
  });
    
  it("contains cats data", async () => {
    await page.goto("http://localhost:3000/cats");
    await page.waitForSelector(".App-cats");
    const text1 = await page.$eval(".App-cats", (e) => e.textContent);
    expect(text1).toContain("Cats");

    const text2 = await page.$eval(".App-cats-data", (e) => e.textContent);
    expect(text2).toContain(mockResponseObject[0].text);
  });

  it("test html properties", async () => {
    await page.goto("http://localhost:3000");
    const disabledButton = await page.$("#disabled-action");
    const isDisabled = await disabledButton.getProperty('disabled').then((disabled) => (disabled.jsonValue()));
    expect(isDisabled).toBe(true);

    const isEnabled = await page.$("#enabled-action:not([disabled])");
    expect(isEnabled !== null).toBe(true);

    const enabledButton = await page.$("#enabled-action[disabled]");
    expect(enabledButton === null).toBe(true);

    const hiddenElem = await page.$("#hidden-element");
    const isHidden = await hiddenElem.getProperty('className').then((className) => (className.jsonValue()));
    expect(isHidden).toBe('Display-none');
  });

  afterAll(() => browser.close());
});