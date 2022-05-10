import { Node } from './Node';

export class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    const tail = this.head;
    const tailNode = new Node(data);

    if (!tail) {
      this.head = tailNode;
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }

      tail.setNextNode(tailNode);
    }
  }
  removeHead() {
    const removedHead = this.head;

    if (!removedHead) return;

    this.head = removedHead.getNextNode();

    return removedHead.data;
  }
}
