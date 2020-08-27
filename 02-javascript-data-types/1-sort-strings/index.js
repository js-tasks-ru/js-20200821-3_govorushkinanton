/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArray = [];
  if (param === 'asc' || param === undefined){
    Object.assign(sortedArray, arr.sort(function (a, b) {
      {
        return a.localeCompare(b, undefined, {caseFirst:'upper'})
      }
    }));
    return sortedArray;
  }
  else if (param === 'desc') {
    Object.assign(sortedArray, arr.sort(function (a,b) {
      return b.localeCompare(a, undefined, {caseFirst:'upper'})
    }));
    return sortedArray;
  }
  else {
    throw new Error('Invalid sorting order specified. Please us either "asc" or "desc"' )
  }
}
