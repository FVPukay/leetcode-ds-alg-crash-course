/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Use fast and slow pointer
 * Time: O(N)
 * Space: O(1)
 */
var middleNode = function(head) {
  let slow = head, fast = head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;  // slow moves twice as fast
  }

  return slow;
};
