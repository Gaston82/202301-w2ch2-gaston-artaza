const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) || Number.isNaN(valueB)) {
    return false;
  } else if (valueA <= 0 || valueB <= 0) {
    return true;
  } else {
    return Object.is(valueA, valueB);
  }
};

export default strictEquals;
