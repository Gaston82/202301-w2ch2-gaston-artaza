const strictEquals = (valueA, valueB) => {
  const values = [valueA, valueB];

  if (Number.isNaN(valueA) || Number.isNaN(valueB)) {
    return false;
  } else if (values.includes(0) || values.includes(-0)) {
    return true;
  }
  return Object.is(valueA, valueB);
};

export default strictEquals;
