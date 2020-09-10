/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let charsPassed = 0;
  let trimmedString = '';

  if (!string || size === 0) {
    return '';
  }
  else if (!size) {
    return string;
  }

  for (let i=0; i < string.length; i++) {
    if (string[i] === string[i+1]) {
      charsPassed++;
    }
    else {
      charsPassed = 0;
    }

    if (charsPassed < size) {
      trimmedString+=string[i];
    }
  }

  return trimmedString;
}
