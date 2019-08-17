const erase = require("./erase");

let pencil = {};
let paper = {};

describe("erase()", () => {
  beforeEach(() => {
    pencil = { eraser: 20 };
    paper = { content: "please erase some text" };
    erase(pencil, paper, "text");
  });
  describe("erase text from paper's content", () => {
    test("replace string with whitespaces", () => {
      expect(paper.content).toBe("please erase some     ");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(16);
    });
  });
});
