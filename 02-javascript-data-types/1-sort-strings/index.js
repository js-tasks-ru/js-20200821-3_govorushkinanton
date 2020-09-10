/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param) {
  const directions = {
    asc: 1,
    desc: -1
  }

  const direction = directions[param]
  if (!direction){
    return sortArray(arr, directions.asc);
  }

  return sortArray(arr, direction)
}

function sortArray(array, direction) {
  const result = array.concat();
  return result.sort(function (a, b) {
    return direction * a.localeCompare(b, undefined, {caseFirst:'upper'})
  })
}
