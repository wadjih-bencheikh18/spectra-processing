import { DoubleArray } from 'cheminfo-types';

/**
 * Create an array with sequential numbers between from and to of length
 *
 * @param options Options
 * @param [options.from=0] from
 * @param [options.to=1] to
 * @param [options.length=1001] length
 * @returns array of floats
 */
export function createSequentialArray(
  options: {
    from?: number;
    to?: number;
    length?: number;
  } = {},
): DoubleArray {
  const { from = 0, to = 1, length = 1000 } = options;
  const array = new Float64Array(length);
  let step = (to - from) / (array.length - 1);
  for (let i = 0; i < array.length; i++) {
    array[i] = from + step * i;
  }
  return array;
}
