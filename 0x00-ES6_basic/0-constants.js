/**
 * Returns a string indicating the preference for using `const` when possible.
 *
 * @return {string} The preference for using `const`.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
