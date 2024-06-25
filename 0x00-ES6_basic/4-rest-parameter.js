/**
 * Calculates the number of arguments passed to the function.
 *
 * @param {array} args - The arguments passed to the function.
 * @return {number} The number of arguments passed.
 */
export default function returnHowManyArguments (...args) {
  return args.length;
}
