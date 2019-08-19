const PencilSimulator = require("./");
const pencil = new PencilSimulator(10, 10, 10);

test("", () => {
  expect(pencil.sharpen()).toBe("pencil point needs not shaperning");
});
