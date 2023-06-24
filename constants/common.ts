export const KEY_CART = 'cart';

/**
 *
 * @param objectName: the object Value want to check empty
 * @returns boolean: true | false
 */
export const isObjectEmpty = (objectName) => {
  for (let prop in objectName) {
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

/**
 *
 * @param values
 * @returns true if exist one of value empty string, nulll or undefined
 */
export const isObjectEmptyValue = (values) =>
  Object.values(values).some((x) => x === undefined || x === null || x === '');

/**
 *
 * @param values
 * @returns true if all value empty string, nulll or undefined
 */
export const isAllObjectEmptyValue = (values) =>
  Object.values(values).every((x) => x === undefined || x === null || x === '');

/**
 *
 * @param num: the number want to round
 * @returns number
 */
export const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

/**
 * PATTERN check type image upload: only accept file .jpg, .png, ...
 */
export const PATTERN_IMAGES = /\.(jpg|jpeg|png|webp|gif)$/;

export const titleAction = {
  add: 'Added',
  edit: 'Updated',
  delete: 'Deleted',
};

export const BREAKPOINT_DEFAULT = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
