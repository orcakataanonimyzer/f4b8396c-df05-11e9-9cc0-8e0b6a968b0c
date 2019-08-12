const {
  isUsable,
  isOutOfLength,
  isSharpened,
  isDull,
  isLowerCase,
  isUpperCase,
  isWhiteSpace
} = require("./booleans");

describe("isUsable", () => {
  test("should return false when length is smaller than 0", () => {
    const pencil = {
      length: -1
    };
    expect(isUsable(pencil)).toBeFalsy();
  });

  test("should return false when length is 0", () => {
    const pencil = {
      length: 0
    };
    expect(isUsable(pencil)).toBeFalsy();
  });

  test("should return true when length is greater than 0", () => {
    const pencil = {
      length: 1
    };
    expect(isUsable(pencil)).toBeTruthy();
  });
});

describe("isOutOfLength", () => {
  test("should return false when length is smaller than 0", () => {
    const pencil = {
      length: -1
    };
    expect(isOutOfLength(pencil)).toBeTruthy();
  });

  test("should return false when length is 0", () => {
    const pencil = {
      length: 0
    };
    expect(isOutOfLength(pencil)).toBeTruthy();
  });

  test("should return true when length is greater than 0", () => {
    const pencil = {
      length: 1
    };
    expect(isOutOfLength(pencil)).toBeFalsy();
  });
});

describe("isSharpen", () => {
  test("should return false when point is smaller than 0", () => {
    const pencil = {
      point: -1
    };
    expect(isSharpened(pencil)).toBeFalsy();
  });

  test("should return false when point is 0", () => {
    const pencil = {
      point: 0
    };
    expect(isSharpened(pencil)).toBeFalsy();
  });

  test("should return true when point is greater than 0", () => {
    const pencil = {
      point: 1
    };
    expect(isSharpened(pencil)).toBeTruthy();
  });
});

describe("isDull", () => {
  test("should return true when point is less than 0", () => {
    const pencil = {
      point: -1
    };
    expect(isDull(pencil)).toBeTruthy();
  });

  test("should return true when point is equal 0", () => {
    const pencil = {
      point: 0
    };
    expect(isDull(pencil)).toBeTruthy();
  });

  test("should return false when point is greater than 0", () => {
    const pencil = {
      point: 1
    };
    expect(isDull(pencil)).toBeFalsy();
  });
});
