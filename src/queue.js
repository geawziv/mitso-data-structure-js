const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
module.exports = class Queue {
  #queue = [];

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value);
    } 
    else {
      let temp = this.queue;

      while (temp.next) {
        temp = temp.next;
      }

      temp.next = new ListNode(value);
    }
  }

  dequeue() {
    if (!this.queue) return;

    const queueData = this.queue.value;
    this.queue = this.queue.next;

    return queueData;
  }
}