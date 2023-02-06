const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data) {
    this.#root = new Node(data);
    let temp = this.#root;

    while (temp) {
      if (temp.data > data) {
        temp.left = new Node(data);
      }
      else {
        temp.right = new Node(data);
      } 
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    while (root) {
      if (data === root.data) return root;

      if (data < root.data) root = root.left;
      else root = root.right;
    }

    return null;
  }

  remove(data) {
    this.#root = this.nodeRemove(this.#root, data);
  }

  nodeRemove(root, data) {
    if (root === null) return root;

    if (data < root.data) {
      root.left = this.nodeRemove(root.left, data);
      return root;
    }
    
    if (data > root.data) {
      root.right = this.nodeRemove(root.right, data);
      return root;
    }

    if (root.left === null) {
      return root.right;
    }
    
    if (root.right === null) {
      return root.left;
    }

    root.data = this.minNode(root.right);
    root.right = this.nodeRemove(root.right, root.data);
    return root;
  }

  min() {
    return this.minNode(this.#root);
  }

  max() {
    let temp = this.#root;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }

  minNode(root) {
    let temp = this.#root;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }
};
