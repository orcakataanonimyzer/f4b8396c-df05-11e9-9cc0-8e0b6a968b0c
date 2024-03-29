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
      expect(pencil.point).toBe(100);
    });

    test("can't sharpen when pencil's length is zero", () => {
      pencil.point = 0;
      pencil.length = 0;
      sharpen(pencil);
      expect(pencil.point).toBe(0);
      expect(pencil.length).toBe(0);
    });

    test("can't sharpen until the pencil is completely dull", () => {
      pencil.point = 2;
      sharpen(pencil);
      expect(pencil.point).toBe(2);
      expect(pencil.length).toBe(1);
    });
  });
});
