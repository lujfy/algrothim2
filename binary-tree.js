// node structure
class Node {
    constructor(value) {
        this.value = value
        this.left = null 
        this.right = null 
    }
}

class BinarySearchTree {
    constructor() {
        // root , this is like an array or a box that we can put the node in
        this.root = null
    }

    // true or false , boolean value
    isEmpty () {
        return this.root === null
    }
// add node to binary search
    insert(value) {
        // create new node 
        const newNode = new Node(value)
        // if there is nothing on the binary tree / nothing in here , we set the root node to be the node that we just create
        if(this.isEmpty()){
            this.root = newNode
        }
        else {
            // if there is a node , we insert it below
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode) {
        // if the node is smaller than the root we put left
        if(newNode.value < root.value) {
            // if there is no node on left we create one
            if(root.left === null){
                root.left = newNode
            }
            // else , we loop until we hit the end 
            else {
                this.insertNode(root.left , newNode)
            }
        }
        else {
            if(root.right == null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right , newNode)
            }

        }
    }

    search(root , value) {
        // if there is no root , we return false 
        if(!root) {
            return false
        }
        else {
            // if we find the value , we exist and return true
            if(root.value === value) {
                return true
            }
            // if the root value is less than the root , we go left 
            else if (value < root.value) {
                return this.search(root.left , value)
            }
            // same thing but go right
            else {
                return this.search(root.right , value)
            }
        }
    }


    // depth first search
    preOrder(root) {
        // if there is a root we print the value , go left , print value , go right , print value
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        // we go the left end of the tree
        // read the value of the node // example 
        // null 3 null , we return the node value is 3 , because all are null we return 3 //3
        // go up and we got 3  5  7
        // we return 5 , and go right , got 7 , null 7 null return 7 // 5
        //                                                           // 7 
        // we go to root left which now 5
        // we got 5 10 15
        // node value is 10 , we return 10 // 10
        // go right got null 15 null 
        // return 15 // 15
        // 3 5 7 10 15
        if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if(root) {
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
        }
    }

    // breadth first search 

    levelOrder() {
        // using queue we got the result

        // create a queue
        // unqueue the root node 
        // as long as the root node exits in queue
            // we dequeue the node from the front
            // read node value
            // enque the node left child
            // enque the node right child
        const queue = []
        queue.push(this.root)
        // the loop will end when there is no root remain
        while(queue.length){              //
            let current = queue.shift()   //1 5
            console.log(current.value)    //2 6
            if(current.left) {            //3 7
                queue.push(current.left)  //
            }
            if(current.right) {           //4 8
                queue.push(current.right) //
            }
        }
    }

// finding min-max of binary-tree
    // the smallest value will alway be left end and the biggest value is always on the right end
    min(root){
        if(!root.left){
            return root.value
        }
        else {
            return this.min(root.left)
        }
    } 
    max(root) {
        if(!root.right) {
            return root.value
        }
        else {
            return this.max(root.right)
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root , 14))
console.log("-------------------------")
bst.preOrder(bst.root)
console.log("-------------------------")
bst.inOrder(bst.root)
console.log("-------------------------")
bst.postOrder(bst.root)
console.log("-------------------------")
bst.levelOrder()
console.log("-------------------------")
console.log(bst.min(bst.root))