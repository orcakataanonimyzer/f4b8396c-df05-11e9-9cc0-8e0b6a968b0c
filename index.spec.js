const PencilSimulator = require("./");
const pencil = new PencilSimulator(10, 10, 10);
const { PencilInitializationError } = require("./errors");
const pencilLengthError = new PencilInitializationError(
  "length must be a positive int"
);
const pencilPointDurabilityError = new PencilInitializationError(
  "max point durability must be a positive int"
);

test("", () => {
  expect(pencil.sharpen()).toBe("pencil point needs not shaperning");
});

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
