export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('setFromArray requires an array');
  }
  return new Set(array);
}
