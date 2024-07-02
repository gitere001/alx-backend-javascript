/**
 * Updates the values in the given Map to 100 if their corresponding value is 1.
 *
 * @param {Map} map - The Map to be updated.
 * @return {void} This function does not return anything.
 * @throws {Error} If the input is not an instance of Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
