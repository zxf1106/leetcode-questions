/**
 * 1. https://leetcode.cn/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();
  for (const [index, value] of nums.entries()) {
    const complement = target - value;
    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(value, index);
  }
  return [-1, -1];
};
