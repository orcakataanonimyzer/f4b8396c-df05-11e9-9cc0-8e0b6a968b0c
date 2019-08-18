const erase = require("./erase");

let pencil = {};
let paper = {};

describe("erase()", () => {
  describe("erase text from paper's content", () => {
    beforeEach(() => {
      pencil = { eraser: 20 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "text");
    });

    test("replace string with whitespaces", () => {
      expect(paper.content).toBe("please erase some     ");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(16);
    });
  });

  describe("when eraser is nearly out-of-use", () => {
    beforeEach(() => {
      pencil = { eraser: 3 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "text");
    });
    test("replace string with whitespaces in a reversed order until out of eraser", () => {
      expect(paper.content).toBe("please erase some t   ");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(0);
    });
  });

  describe("erase text in the middle of the paper", () => {
    beforeEach(() => {
      pencil = { eraser: 2 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "some");
    });
    test("replace string with whitespaces", () => {
      expect(paper.content).toBe("please erase so   text");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(0);
    });
  });

  describe("erase text in the beginning of the paper", () => {
    beforeEach(() => {
      pencil = { eraser: 7 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "please");
    });
    test("replace string with whitespaces", () => {
      expect(paper.content).toBe("       erase some text");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(1);
    });
  });

  describe("paper's content contains multiple occurances", () => {
    beforeEach(() => {
      pencil = { eraser: 7 };
      paper = { content: "please please please please" };
      erase(pencil, paper, "lease");
    });
    test("must only remove the last occurance", () => {
      expect(paper.content).toBe("please please please p     ");
    });
    test("degrades eraser durability", () => {
      expect(pencil.eraser).toBe(2);
    });
  });

  describe("when eraser is out of use", () => {
    beforeEach(() => {
      pencil = { eraser: 0 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "please");
    });
    test("string remains the same", () => {
      expect(paper.content).toBe("please erase some text");
    });
    test("eraser durability remains the same", () => {
      expect(pencil.eraser).toBe(0);
    });
  });

  describe("when there is no occurence for text in the paper's content", () => {
    beforeEach(() => {
      pencil = { eraser: 70 };
      paper = { content: "please erase some text" };
      erase(pencil, paper, "eraser");
    });
    test("string remains the same", () => {
      expect(paper.content).toBe("please erase some text");
    });
    test("eraser durability remains the same", () => {
      expect(pencil.eraser).toBe(70);
    });
  });

  describe("when the occurence's has more characters than paper's content", () => {
    beforeEach(() => {
      pencil = { eraser: 70 };
      paper = { content: "please" };
      erase(pencil, paper, "please sir");
    });
    test("string remains the same", () => {
      expect(paper.content).toBe("please");
    });
    test("eraser durability remains the same", () => {
      expect(pencil.eraser).toBe(70);
    });
  });
});
