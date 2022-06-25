/**
 * 3. https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}

 */
const lengthOfLongestSubstring = (s) => {
  const hash = {};
  let max = 0,
    start = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = str[i];
    if (curr in hash) {
      max = Math.max(max, i - start);
      start = Math.max(start, hash[curr] + 1);
    }
    hash[curr] = i;
  }
  return Math.max(str.length - start, max);
};
