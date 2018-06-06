/**
 * Utility functions
 */

/**
 * Determines whether the variable in question is null or undefined.
 * @param {any} variable
 * @return {Boolean} false if it's undefined or null, true otherwise.
 */
export const exists = (variable) => {
  if (typeof variable === 'undefined' || variable === null) {
    return false;
  }
  return true;
};