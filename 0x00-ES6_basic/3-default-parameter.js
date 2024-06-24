/**
 * Calculates the sum of three numbers, with default values for two of them.
 *
 * @param {number} initialNumber - The first number to be added.
 * @param {number} [expansion1989=89] - The second number to be added. Defaults to 89.
 * @param {number} [expansion2019=19] - The third number to be added. Defaults to 19.
 * @return {number} The sum of the three numbers.
 * @throws {TypeError} If any of the parameters are not numbers.
 */
export default function getSumOfHoods(
	initialNumber,
	expansion1989 = 89,
	expansion2019 = 19,
  ) {
	if (typeof initialNumber !== 'number' || typeof expansion1989 !== 'number' || typeof expansion2019 !== 'number') {
		throw new TypeError('All parameters must be numbers');
	}
	return initialNumber + expansion1989 + expansion2019;
  }
