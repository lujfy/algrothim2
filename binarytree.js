// Node structure

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  Node.prototype.search = function(val) {
    if (this.value == val) {
      return this;
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }
  
  Node.prototype.visit = function() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right != null) {
      this.right.visit();
    }
  }
  
  Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n)
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }


  // tree structure

  function Tree() {
    this.root = null;
  }
  
  Tree.prototype.traverse = function() {
    this.root.visit();
  }
  
  Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
  }
  
  Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  }


  // start fuction

var tree;

function setup(arr) {
  tree = new Tree();

  for (var i = 0; i < arr.length; i++) {
    tree.addValue(arr[i]);
  }
  console.log(tree);
  tree.traverse();

  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}

setup([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])