export default function cleanSet(set, string) {
  if (!set || !string) {
    return '';
  }
  if (typeof set[Symbol.iterator] !== 'function') {
    throw new TypeError('Input set must be iterable');
  }
  if (typeof string !== 'string') {
    throw new TypeError('Input string must be a string');
  }
  if (string === '') {
    return '';
  }
  const cleanedArray = [];
  for (const i of set) {
    if (typeof i !== 'string') {
      throw new TypeError('Input set must contain strings');
    }
    if (i.includes(string)) {
      const result = i.replace(string, '');
      cleanedArray.push(result);
    }
  }
  const joinedSting = cleanedArray.join('-');
  return joinedSting;
}
