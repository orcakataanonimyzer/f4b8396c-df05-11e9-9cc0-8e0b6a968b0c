const sharpen = require("./sharpen");
let pencil = {};

describe("sharpen()", () => {
  describe("sharpens the pencil", () => {
    beforeEach(() => {
      pencil = { maxPoint: 100, point: 0, length: 2 };
      sharpen(pencil);
    });

    test("restore the pencil's to its initial point durability", () => {
      expect(pencil.point).toBe(pencil.maxPoint);
    });

    test("decrease the pencil's length by 1", () => {
      expect(pencil.length).toBe(1);
    });

    test("can't sharpen the pencil twice", () => {
      sharpen(pencil);
      expect(pencil.length).toBe(1);
    });
  });
});
