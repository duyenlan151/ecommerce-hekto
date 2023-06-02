export const KEY_CART = 'cart';

export const isObjectEmpty = (objectName) => {
  for (let prop in objectName) {
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

export const isObjectEmptyValue = (values) =>
  Object.values(values).some((x) => x === null || x === '');

export const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
