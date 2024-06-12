import { test, expect } from 'vitest';

import { fourSum } from './fourSum';

test('fourSum', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);

  expect(fourSum([], 0)).toEqual([]);

  expect(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)).toEqual([[-5, -4, -3, 1]]);
});
