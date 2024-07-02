/**
 * Creates an Int8Array typed array with the specified
 * length and sets the value at the given position.
 *
 * @param {number} length - The length of the typed array.
 * @param {number} position - The position in the typed array to set the value.
 * @param {number} value - The value to set at the given position.
 * @throws {Error} If the position is outside the range of the typed array.
 * @return {DataView} The DataView object representing the typed array.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
