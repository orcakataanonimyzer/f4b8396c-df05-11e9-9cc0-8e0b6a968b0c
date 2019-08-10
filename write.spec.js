const { write } = require("./");
let pencil = {};
let paper = {};
let text = "Let's start writing"; //costs 18 pencil point

describe("write()", () => {
  describe("instructes a pencil to write on a sheet of paper", () => {
    beforeEach(() => {
      pencil = { point: 40 };
      paper = { content: "" };
      write(pencil, paper, text);
    });

    // afterEach(() => {
    //   pencil = {};
    //   paper = {};
    // });

    test("writes text to an empty paper", () => {
      expect(paper.content).toBe(text);
    });

    test("degrades the pencil's point", () => {
      expect(pencil.point).toBe(40 - 18);
    });

    test("write whitespaces does not cost pencil point", () => {
      const whitespaces = "\n\t\r";
      write(pencil, paper, whitespaces);
      expect(pencil.point).toBe(40 - 18);
    });

    test("appends text to the paper content", () => {
      write(pencil, paper, text);
      expect(paper.content).toBe(text + text);
    });

    test("causes pencil to go dull", () => {
      write(pencil, paper, text);
      write(pencil, paper, text);
      expect(pencil.point).toBe(0);
    });

    test("dull pencil can only write white space char", () => {
      write(pencil, paper, text);
      write(pencil, paper, text);
      expect(paper.content).toBe(text + text + "Let                ");
    });
  });
});
