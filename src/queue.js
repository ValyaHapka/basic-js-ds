const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */



class Queue {
  value = {}
  getUnderlyingList() {
    return queue.value
  }

  enqueue(value) {
    if (!this.value.head) {
      this.value.head = {value, next: null}
      return;
    }
    let node = this.value.head
    while (node.next != null) {
      node = node.next
    }
    node.next = {value, next: null}
  }

  dequeue() {
    if (!this.value.head) {
      return null
    }
    const nodeValue = this.value.head.value
    this.value.head = this.value.head.next
    return nodeValue
  }
}
const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

module.exports = {
  Queue
};
