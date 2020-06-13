import { BinaryOperation } from '@dinero.js/core';

/**
 * Returns the quotient of two numbers.
 *
 * @param dividend The number to divide.
 * @param divisor The number to divide with.
 *
 * @returns The quotient of the two numbers.
 */
const divide: BinaryOperation<number> = (dividend, divisor) => {
  return dividend / divisor;
};

export default divide;