const { generateInfo } = require("./util.js");

test("should output name and age", () => {
  const info = generateInfo("John", 23);
  expect(info).toBe("John is 23 years old !");
});

test("should output data-less case", () => {
  const info = generateInfo();
  expect(info).toBe("undefined is undefined years old !");
});
