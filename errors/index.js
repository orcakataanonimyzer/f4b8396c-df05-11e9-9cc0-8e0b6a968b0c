class PencilInitializationError extends Error {
  constructor() {
    super();
  }
}

class PencilErasingError extends Error {
  constructor() {
    super();
  }
}

class PencilEdittingError extends Error {
  constructor() {
    super();
  }
}

module.exports = {
  PencilInitializationError,
  PencilErasingError,
  PencilEdittingError
};
