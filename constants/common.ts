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
  Object.values(values).some((x) => x === undefined || x === null || x === '');

export const isAllObjectEmptyValue = (values) =>
  Object.values(values).every((x) => x === undefined || x === null || x === '');

export const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

export const PATTERN_IMAGES = /\.(jpg|jpeg|png|webp|gif)$/;

export const titleAction = {
  add: 'Added',
  edit: 'Updated',
  delete: 'Deleted',
};
