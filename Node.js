class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('data must be an instance of Node');
    }

    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;
