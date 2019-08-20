const PencilSimulator = require("./");
const pencil = new PencilSimulator(10, 10, 10);
const { PencilInitializationError } = require("./errors");

test("", () => {
  expect(pencil.sharpen()).toBe("pencil point needs not shaperning");
});

test("can't create pencil with negative or 0 length", () => {
  expect(() => {
    new PencilSimulator(0, 1, 1);
  }).toThrowError(
    new PencilInitializationError("length must be a positive int")
  );

  expect(() => {
    new PencilSimulator(-1, 1, 1);
  }).toThrowError(
    new PencilInitializationError("length must be a positive int")
  );

  expect(() => {
    new PencilSimulator(undefined, 1, 1);
  }).toThrowError(
    new PencilInitializationError("length must be a positive int")
  );
});
