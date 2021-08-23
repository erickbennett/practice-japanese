function createRandomInteger(min, max) {
  let int = Math.round(Math.random() * (max - min));
  if (int === 0) {
    return 1;
  }
  return int;
}

export { createRandomInteger };
