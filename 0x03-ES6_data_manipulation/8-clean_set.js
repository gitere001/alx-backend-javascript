/**
 * Cleans a set by removing the starting string from each value and
 * joining the results with a hyphen.
 *
 * @param {Set} set - The set to be cleaned.
 * @param {string} startString - The starting string to remove from each value in the set.
 * @return {string} The cleaned set values joined by a hyphen.
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const cleanSetArray = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const restString = value.slice(startString.length);
      cleanSetArray.push(restString);
    }
  });
  return cleanSetArray.join('-');
}
