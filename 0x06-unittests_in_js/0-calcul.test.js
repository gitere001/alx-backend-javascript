import assert from 'assert';
import { calculateNumber } from './0-calcul.js';

describe('calculateNumber', () => {
  it('should return 0 when both inputs are 0', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('should return 5 when one input is 0 and the other is 5', () => {
    assert.equal(calculateNumber(0, 5), 5);
    assert.equal(calculateNumber(5, 0), 5);
  });

  it('should return 1 when input is -2 and 3', () => {
    assert.equal(calculateNumber(-2, 3), 1);
  });

  it('should return -1 when input is 2 and -3', () => {
    assert.equal(calculateNumber(2, -3), -1);
  });

  it('should return 2 when input is -2.5 and 3.5', () => {
    assert.equal(calculateNumber(-2.5, 3.5), 2);
  });

  it('should return -1 when input is 2.5 and -3.5', () => {
    assert.equal(calculateNumber(2.5, -3.5), 0);
  });

  it('should return 4 when input is 1.7 and 1.7', () => {
    assert.equal(calculateNumber(1.7, 1.7), 4);
  });

  it('should return 2e+20 when input is 1e+20 and 1e+20', () => {
    assert.equal(calculateNumber(1e+20, 1e+20), 2e+20);
  });

  it('should return 0 when input is 0.00001 and 0.00002', () => {
    assert.equal(calculateNumber(0.00001, 0.00002), 0);
  });

  it('should return 0 when input is -0.00001 and -0.00002', () => {
    assert.equal(calculateNumber(-0.00001, -0.00002), 0);
  });

  it('should return 1 when input is -0.5 and 1.5', () => {
    assert.equal(calculateNumber(-0.5, 1.5), 2);
  });

  it('should return -4 when input is -1.7 and -1.7', () => {
    assert.equal(calculateNumber(-1.7, -1.7), -4);
  });
});
