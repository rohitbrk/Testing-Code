const { validateVoter } = require("./util.js");

test("should output info about vote right", () => {
  const info = validateVoter("John", 23);
  expect(info).toBe("John is 23 years old and has vote right !");
});

test("should output data-less case", () => {
  const info = validateVoter();
  expect(info).toBe("undefined is undefined years old and has vote right !");
});
