class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  getKey() {
    return this.key;
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.nodeMap = {};

    this.head = null;
    this.tail = null;
  }

  removeNode(key) {
    if (!this.nodeMap.hasOwnProperty(key)) {
      return;
    }

    let node = this.nodeMap[key];
    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }

    node = null;
    delete this.nodeMap[key];
    this.currentSize = this.currentSize - 1;
  }

  addNode(key, value) {
    const node = new Node(key, value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.nodeMap[key] = node;
    this.currentSize = this.currentSize + 1;
  }

  get(key) {
    if (this.nodeMap.hasOwnProperty(key)) {
      const node = this.nodeMap[key];
      let value = null;
      if (node) {
        value = node.getValue();
      }

      this.removeNode(key);
      this.addNode(key, value);

      return value ? value : -1;
    }
    return -1;
  }

  put(key, value) {
    if (this.nodeMap.hasOwnProperty(key)) {
      this.removeNode(key);
    }

    if (this.currentSize === this.capacity) {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      this.removeNode(curr.getKey());
    }
    this.addNode(key, value);
  }

  display() {
    let curr = this.head;
    while (curr != null) {
      curr = curr.next;
    }
  }
}

module.exports = LRUCache;
