/**
 * Compare Keys
 * @param {object} obj1 - object to compare
 * @param {object} obj2 - object to compare against
 * @returns {bool} - validity
 * @private
 */
module.exports = function compareKeys(obj1, obj2, fn) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (let i = 0; i < keys1.length; i++) {
    if (keys2.indexOf(keys1[i]) <= -1) {
      throw Error(`property ${keys1[i]} is not a valid query for ${fn}`);
    }
  }

  return true;
};
