const PencilSimulator = require("./");
const pencil = new PencilSimulator(10, 10, 10);
const { PencilInitializationError } = require("./errors");
const pencilLengthError = new PencilInitializationError(
  "length must be a positive int"
);
const pencilPointDurabilityError = new PencilInitializationError(
  "max point durability must be a positive int"
);

describe("PencilSimulator class", () => {
  describe("constructor", () => {
    describe("failed initializations", () => {
      test("can't create pencil with negative or 0 length", () => {
        expect(() => {
          new PencilSimulator(0, 1, 1);
        }).toThrowError(pencilLengthError);

        expect(() => {
          new PencilSimulator(-1, 0, 1);
        }).toThrowError(pencilLengthError);

        expect(() => {
          new PencilSimulator(null, -1, 1);
        }).toThrowError(pencilLengthError);
      });

      test("can't create pencil with negative or 0 max point durability", () => {
        expect(() => {
          new PencilSimulator(1, 0, 1);
        }).toThrowError(pencilPointDurabilityError);

        expect(() => {
          new PencilSimulator(1, -1, 1);
        }).toThrowError(pencilPointDurabilityError);

        expect(() => {
          new PencilSimulator(1, null, 1);
        }).toThrowError(pencilPointDurabilityError);
      });

      test("can't create pencil with negative or 0 eraser durability", () => {
        expect(() => {
          new PencilSimulator(1, 1, 0);
        }).toThrowError();

        expect(() => {
          new PencilSimulator(1, 1, -1);
        }).toThrowError();

        expect(() => {
          new PencilSimulator(1, 1, null);
        }).toThrowError();
      });
    });

    describe("successfull initializations", () => {
      let pencil = null;
      beforeEach(() => {
        pencil = new PencilSimulator(10, 10, 10);
      });
      test("create a pencil simulator object", () => {
        expect(typeof pencil).toBe("object");
      });
      test("pencil must have length", () => {
        expect(pencil.length).toBe(10);
      });
      test("pencil must have max point durability", () => {
        expect(pencil.maxPoint).toBe(10);
      });
      test("pencil must have point durability", () => {
        expect(pencil.point).toBe(10);
      });
      test("pencil must have eraser durability", () => {
        expect(pencil.eraser).toBe(10);
      });
    });
  });

  describe("write", () => {
    let pencil = null;
    let paper = null;
    beforeEach(() => {
      pencil = new PencilSimulator(10, 100, 10);
      paper = { content: "" };
      pencil.write(paper, "I am writing my first sentence");
    });

    test("write the 1st sentence on the paper", () => {
      expect(paper.content).toBe("I am writing my first sentence");
    });
    test("degrade point durability", () => {
      expect(pencil.point).toBe(100 - 23);
    });
  });
});
