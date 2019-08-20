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

  test("simulate different pencil actions on the a single paper", () => {
    const pencil = new PencilSimulator(10, 32, 10);
    const paper = { content: "" };
    pencil.write(paper, "I am writing my first sentence");

    expect(paper.content).toBe("I am writing my first sentence");
    expect(pencil.point).toBe(32 - 26);

    pencil.erase(paper, "first");

    expect(paper.content).toBe("I am writing my       sentence");
    expect(paper.lastErased).toBe(16);
    expect(pencil.eraser).toBe(5);

    expect(() => {
      pencil.erase();
    }).toThrowError();

    pencil.edit(paper, "second");
    expect(paper.content).toBe("I am writing my secondsentence");
    expect(pencil.point).toBe(0);
    expect(() => {
      pencil.edit(paper, "second");
    }).toThrowError();

    pencil.sharpen();
    expect(pencil.point).toBe(32);

    pencil.erase(paper, "my");
    expect(paper.content).toBe("I am writing    secondsentence");

    expect(paper.lastErased).toBe(13);
    expect(pencil.eraser).toBe(3);

    pencil.edit(paper, "an awesome");
    expect(paper.content).toBe("I am writing an @@@@@@@entence");
    expect(pencil.point).toBe(32 - 9);

    pencil.erase(paper, "writing");
    expect(paper.content).toBe("I am writ    an @@@@@@@entence");
  });
});
