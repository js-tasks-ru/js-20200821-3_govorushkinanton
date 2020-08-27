/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

/** I took a look at Object.entries() and learned how it works. But this solution seemed more clear and compact to me.
 * Please let me know if you want me to rework this
 */
export const pick = (obj, ...fields) => {
  let sortedObject = {};
  fields.forEach(entry=>{
    if (entry in obj){
      sortedObject[entry] = obj[entry]
    }})
  return sortedObject
};
