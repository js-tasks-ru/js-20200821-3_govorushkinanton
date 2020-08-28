/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

/**
 * Read about Object.entries(), but I found it better to apply knowledge
 * from https://learn.javascript.ru/object
 */
export const pick = (obj, ...fields) => {
  const sortedObject = {};
  for(let param in obj){
    if (fields.find(fieldToPick => fieldToPick === param)){
      sortedObject[param] = obj[param]
    }
  }
  return sortedObject
}
