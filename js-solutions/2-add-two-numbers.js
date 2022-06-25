/**
 * 2. https://leetcode.cn/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode(-1);
  let curr = dummy;
  let carry = 0;
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;

    let sum = n1 + n2 + carry;
    curr.next = new ListNode(sum % 10);
    carry = ~~(sum / 10);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry === 1) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
