/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
    this.previous = 0;
  }

  push(element) {
    const node = element;
    this.previous = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    const last = this.top;
    this.top = this.previous;
    this.size--;
    return last;
  }

  peek() {
    return this.top;
  }
}

module.exports = Stack;
