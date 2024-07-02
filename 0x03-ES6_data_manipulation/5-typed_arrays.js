export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (length < 0 || position < 0) {
    throw new RangeError('Length and position must be non-negative');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= length) {
    throw new RangeError('Position must be less than length');
  }
  view.setInt8(position, value);
  return buffer;
}
