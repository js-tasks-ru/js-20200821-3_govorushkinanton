/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortedArray = [];
  if (param === 'asc' || param === undefined){
    Object.assign(sortedArray, sortArray(arr));
    return sortedArray;
  }
  else if (param === 'desc') {
    Object.assign(sortedArray, sortArray(arr).reverse());
    return sortedArray;
  }
  else {
    throw new Error('Invalid sorting order specified. Please use either "asc" or "desc"' )
  }
}

function sortArray(array) {
  return array.sort(function (a, b) {
    return a.localeCompare(b, undefined, {caseFirst:'upper'})
  })
}
