/**
 * 11. https://leetcode.cn/problems/container-with-most-water/
 * @param {number[]} height
 * @returns {number}
 */
const maxArea = (height) => {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
