const puppeteer = require("puppeteer");

test("check sum", async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  const URL =
    "file:///C:/Users/rohit/Desktop/Testing/Testing/EndToEnd%20Test/index.html";
  await page.goto(URL);

  await page.locator("#firstNumber").fill("1");
  await page.locator("#secondNumber").fill("1");

  await page.locator("#btnResult").click();

  await page.waitForSelector("p");
  let element = await page.$("p");
  let result = await page.evaluate((el) => el.textContent, element);
  console.log(result);

  // await page.locator("p").wait();
  // const result = await page.evaluateHandle(() => {
  //   return document.body.p;
  // });

  expect(result).toBe("2");
  await browser.close();
});
