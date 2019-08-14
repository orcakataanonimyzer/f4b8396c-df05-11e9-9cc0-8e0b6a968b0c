const write = require("./write");
let pencil = { point: 10000000 };
let paper = { content: "" };
let text = ""; //costs 18 pencil point
while (text.length < 10000000) {
  text += "a";
}

describe("write()", () => {
  test("", () => {
    write(pencil, paper, text);

    expect(pencil.point).toBe(0);
    expect(paper.content).toBe(text);
  });
});
