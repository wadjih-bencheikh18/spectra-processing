import { ArrayType } from '..';

import { xCheckLengths } from './xCheck';
/**
 * This function calculates the mean absolute error
 *
 * @param array1 -first array
 * @param array2 second array
 * @returns result
 */
export function xMeanAbsoluteError(
  array1: ArrayType,
  array2: ArrayType,
): number {
  xCheckLengths(array1, array2);
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += Math.abs(array1[i] - array2[i]);
  }
  return sum / array1.length;
}
