const write = require("./write");
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

    test("writes text to an empty paper", () => {
      expect(paper.content).toBe(text);
    });

    test("writing degrades the pencil's point", () => {
      expect(pencil.point).toBe(40 - 18);
    });

    test("writes whitespaces does not cost pencil point", () => {
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

  describe("write uppercase letter when durability is 1", () => {
    beforeEach(() => {
      paper = { content: "" };
      pencil.point = 1;
      write(pencil, paper, "T");
    });

    test("should write # instead", () => {
      expect(paper.content).toBe("#");
    });

    test("durability should still be one", () => {
      expect(pencil.point).toBe(0);
    });
  });

  describe("write uppercase letter within a string when durability is 1", () => {
    beforeEach(() => {
      paper = { content: "" };
      pencil.point = 4;
      write(pencil, paper, "abcDef");
    });

    test("should write # instead", () => {
      expect(paper.content).toBe("abc#  ");
    });

    test("durability should still be zero", () => {
      expect(pencil.point).toBe(0);
    });
  });

  describe("write only lowercase or upercase word", () => {
    beforeEach(() => {
      pencil = { point: 40 };
      paper = { content: "" };
      write(pencil, paper, text);
    });

    test("should append text to paper's content and degrade pencil point", () => {
      write(pencil, paper, ", ");
      write(pencil, paper, "hello");
      expect(paper.content).toBe(text + ", hello");
      expect(pencil.point).toBe(16);
    });

    test("should append text to paper's content until pencil point worn out and degrade pencil point to 0", () => {
      write(pencil, paper, text);
      write(pencil, paper, ", ");
      write(pencil, paper, "hello");
      expect(paper.content).toBe(`${text}${text}, hel  `);
      expect(pencil.point).toBe(0);
    });

    test("should append text to paper's content and degrade pencil point", () => {
      write(pencil, paper, ", ");
      write(pencil, paper, "HELLO");
      expect(paper.content).toBe(text + ", HELLO");
      expect(pencil.point).toBe(11);
    });

    test("should append text to paper's content until pencil point worn out and degrade pencil point to 0", () => {
      write(pencil, paper, text);
      write(pencil, paper, ", ");
      write(pencil, paper, "HELLO");
      expect(paper.content).toBe(`${text}${text}, H#   `);
      expect(pencil.point).toBe(0);
    });
  });

  describe("write whitespace when pencil is dull", () => {
    beforeEach(() => {
      paper = { content: "" };
      pencil.point = 0;
      write(pencil, paper, "\n\t\r");
    });

    test("should write all whitespace char", () => {
      expect(paper.content).toBe("\n\t\r");
    });

    test("the pencil is still dull", () => {
      expect(pencil.point).toBe(0);
    });
  });
});
