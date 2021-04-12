/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  const arrFromList = [];
  let currEl = l;

  while (currEl) {
    arrFromList.push(currEl.value);
    currEl = currEl.next;
  }

  const newList = arrFromList
    .filter((el) => el !== k)
    .reverse()
    .reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }

      return new ListNode(cur);
    }, null);

  return newList;
}

module.exports = removeKFromList;
