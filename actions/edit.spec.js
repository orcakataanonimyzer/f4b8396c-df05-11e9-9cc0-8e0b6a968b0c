const edit = require("./edit");

describe("edit()", () => {
  describe("edit previously erased text", () => {
    test("should not edit if text is not previously erased from the content", () => {
      const paper = { content: "please edit me" };
      const pencil = { point: 40 };
      edit(pencil, paper, "edit");
      expect(paper.content).toBe("please edit me");
      expect(paper.lastErased).toBe(undefined);
    });

    test("should replace previously erased text with text", () => {
      const paper = { content: "please      me", lastErased: 7 };
      const pencil = { point: 40 };
      edit(pencil, paper, "edit");
      expect(paper.content).toBe("please edit me");
      expect(paper.lastErased).toBe(undefined);
    });

    test("should replace overlapped char with @", () => {
      const paper = { content: "please      me", lastErased: 7 };
      const pencil = { point: 40 };
      edit(pencil, paper, "edit me");
      expect(paper.content).toBe("please edit @@");
      expect(paper.lastErased).toBe(undefined);
    });
  });
});
