/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

/**
 * Same as with "pick()" task. Read about Object.entries(), but I found it better to apply knowledge
 * from https://learn.javascript.ru/object
 */
export const omit = (obj, ...fields) => {
  const sortedObject = {};

  for (const key of Object.keys(obj)) {
    if (!fields.includes(key)) {
      sortedObject[key] = obj[key];
    }
  }

  return sortedObject;
}
