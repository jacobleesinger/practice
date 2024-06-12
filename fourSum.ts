/**
 * Take an array of integers and a target sum
 * return all unique quadruplets [a, b, c, d] in the array that sum to the target
 *
 * @param  {number[]} nums array of integers
 * @param {number} target the target sum
 * @returns {number[][]} array of quadruplets
 */
export function fourSum(nums: number[], target: number): number[][] {
  // sort the numbers so that the multiple pointers technique will work properly
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  // use four pointers to find quadruplets summing to the target
  for (let first = 0; first < nums.length - 3; first++) {
    // skip duplicate elements for the first number
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    for (let second = first + 1; second < nums.length - 2; second++) {
      // skip duplicate elements for the second number
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }

      let third = second + 1;
      let fourth = nums.length - 1;

      while (third < fourth) {
        const currentSum =
          nums[first] + nums[second] + nums[third] + nums[fourth];
        if (currentSum === target) {
          result.push([nums[first], nums[second], nums[third], nums[fourth]]);

          // skip duplicate elements for the third number
          while (third < fourth && nums[third] === nums[third + 1]) {
            third++;
          }

          // skip duplicate elements for the fourth number
          while (third < fourth && nums[fourth] === nums[fourth - 1]) {
            fourth--;
          }

          third++;
          fourth--;
        } else if (currentSum < target) {
          third++;
        } else {
          fourth--;
        }
      }
    }
  }

  return result.map((x) => x.sort((a, b) => a - b));
}
