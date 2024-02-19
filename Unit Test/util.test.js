const {
    describe,
    it,
    expect
} = require("jest")
const {
    generateInfo
} = require("./util.js");

describe("check valid name and age", () => {
    it("should output name and age", () => {
        const info = generateInfo("John", 23);
        expect(info).toBe("John is 23 years old !");
    });

    it("should output data-less case", () => {
        const info = generateInfo();
        expect(info).toBe("undefined is undefined years old !");
    });
})
