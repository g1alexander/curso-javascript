const sumar = (a, b) => {
  return a + b;
};
const restar = (a, b) => {
  return a - b;
};

// objeto
const operaciones = {
  // si la propiedad y valor se llaman igual solo nombralo una vez
  sumar,
  restar,
};

export { operaciones };
