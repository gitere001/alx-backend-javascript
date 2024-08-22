const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
	describe('SUM', () => {
		it('should return 5 when adding 2 and 3', () => {
			assert.equal(calculateNumber('SUM', 2, 3), 5);
		});
		it('should return 0 when adding -2.8 and 3', () => {
			assert.equal(calculateNumber('SUM', -2.8, 3), 0);
		});
		it('should return 5 when adding 2.1 and 3.2', () => {
			assert.equal(calculateNumber('SUM', 2.1, 3.2), 5);
		});
		it('should return 0 when both numbers are 0', () => {
			assert.equal(calculateNumber('SUM', 0, 0), 0);
		});
		it('should return -5 when adding -2.5 and -2.5', () => {
			assert.equal(calculateNumber('SUM', -2.5, -2.5), -4);
		});
		it('should return 1 when adding 0.5 and 0.5', () => {
			assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
		});
		it('should return 1e+20 when adding 1e+20 and 1e+20', () => {
			assert.equal(calculateNumber('SUM', 1e+20, 1e+20), 2e+20);
		});
	});

	describe('SUBTRACT', () => {
		it('should return 0 when subtracting 3 from 3', () => {
			assert.equal(calculateNumber('SUBTRACT', 3, 3), 0);
		});
		it('should return 1 when subtracting 2 from 3', () => {
			assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
		});
		it('should return -1 when subtracting 3 from 2', () => {
			assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
		});
		it('should return 0 when both numbers are 0', () => {
			assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
		});
		it('should return -5 when subtracting -2 from -3', () => {
			assert.equal(calculateNumber('SUBTRACT', -3, -2), -1);
		});
		it('should return -1 when subtracting 0.5 from 0.5', () => {
			assert.equal(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
		});
		it('should return 1e+20 when subtracting 1e+20 from 2e+20', () => {
			assert.equal(calculateNumber('SUBTRACT', 2e+20, 1e+20), 1e+20);
		});
	});

	describe('DIVIDE', () => {
		it('should return 2 when dividing 10 by 5', () => {
			assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
		});
		it('should return "Error" when dividing by 0', () => {
			assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
		});
		it('should return 0 when dividing 0 by 10', () => {
			assert.equal(calculateNumber('DIVIDE', 0, 10), 0);
		});
		it('should return 1 when dividing 1 by 1', () => {
			assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
		});
		it('should return -2 when dividing -10 by 5', () => {
			assert.equal(calculateNumber('DIVIDE', -10, 5), -2);
		});
		it('should return 1 when dividing 1.5 by 1.5', () => {
			assert.equal(calculateNumber('DIVIDE', 1.5, 1.5), 1);
		});
		it('should return 1e+20 when dividing 1e+20 by 1', () => {
			assert.equal(calculateNumber('DIVIDE', 1e+20, 1), 1e+20);
		});
	});
});
