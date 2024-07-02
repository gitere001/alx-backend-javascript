/**
 * Cleans a set by removing the starting string from each value and
 * joining the results with a hyphen.
 *
 * @param {Set} set - The set to be cleaned.
 * @param {string} startString - The starting string to remove from each value in the set.
 * @return {string} The cleaned set values joined by a hyphen.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
