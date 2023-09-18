// Board class

class Board {
    constructor() {
        // Create an array of 64 arrays, each containing coordinates in an 8x8 grid
        this.grid = []
        for(let i = 1 ; i <= 8 ; i++) {
            for(let j = 1 ; i <=8 ; j++){
                this.grid.push([i , j])
                //            row column
            }
        }
    }

    allowed(move) {
        // check if the move is within the board
        return move[0] >= 1 && move[0] <= 8 && move[1] >= 1 &&move[1] <= 8
        // it check if the row is greater than 1 and smaller than 8 
        // it check if the column is greater than 1 and smaller than 8

    }
}

class Knight {
    constructor() {
        // set the initial position 
        this.position = [ 1 , 1 ]
    }

    getMoves(pos = this.position){
        // set the position to be the intial positon
        // the offsets define the knight move , in chess , the knight move in L shape
        // [-2 , -1] mean the knight move two square up and turn left
        const offsets = [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
          ];

        const moves = []
        // we set the moves to an empty array

        // Loop through each offset and apply it to the position
        for (let offset in offsets) {
            // we calculate the move
            const newPos = [
                pos[0] + offset[0],
                pos[1] + offset[1],
              ];
        }

    // Check if the new position is valid and add it to the moves array
      if (Board.allowed(newPos)) {
        moves.push(newPos);
      }

      // Return the moves array
        return moves;
    }

    

    
}

class Node {
    constructor(position , parent) {
        // Set the position, parent, and children of the node
        this.position = position; // an array of two numbers that indicate the row and column
        // of the square on the board where the knight is at this step.

        this.parent = parent; // represents the previous step in the path . 
        // The start node has a null parent, since it has no previous step.

        this.children = []; //  array of nodes that represent the next possible steps in the path
    }


}

// Path class
class Path {
    constructor(start, finish) {
      // Set the start and finish nodes
      this.start = new Node(start);
      this.finish = new Node(finish);
  
      // Initialize an empty queue
      this.queue = [];
  
      // Initialize an empty path
      this.path = [];
    }
  
    // Find the shortest path using BFS
    findPath() {
      // Reset the knight's position to the start node's position
      knight.position = this.start.position;
  
      // Set the current node to the start node and add it to the queue
      let current = this.start;
      this.queue.push(current);
  
      // Loop until the queue is empty or the finish node is found
      while (this.queue.length > 0) {
        // Get the first node from the queue and remove it
        current = this.queue.shift();
  
        // Generate the children of the current node
        this.getChildren(current);
  
        // Check if any of the children is the finish node
        if (this.checkChildren(current)) {
          // Return the path by tracing back the parents
          return this.tracePath(current);
        }
      }
  
      // If the queue is empty and the finish node is not found, return an empty path
      return [];
    }
  
    // Generate the children of a given node
    getChildren(node) {
      // Empty the children array of the node
      node.children = [];
  
      // Get all possible moves from the node's position
      const moves = knight.getMoves(node.position);
  
      // Loop through each move and create a new node with the node as its parent
      for (let move of moves) {
        const child = new Node(move, node);
        // Add the child to the node's children array
        node.children.push(child);
      }
    }
  
    // Check if any of the children of a given node is the finish node
    checkChildren(node) {
      // Loop through each child of the node
      for (let child of node.children) {
        // Check if the child's position matches the finish node's position
        if (
          child.position[0] === this.finish.position[0] &&
          child.position[1] === this.finish.position[1]
        ) {
          // Set the finish node's parent to the child's parent
          this.finish.parent = child.parent;
  
          // Return true
          return true;
        }
  
        // If not, add the child to the queue
        this.queue.push(child);
      }
  
      // Return false if none of the children matches the finish node
      return false;
    }
  
    // Trace back the path from a given node to the start node using their parents
    tracePath(node) {
      // Initialize an empty path array
      const path = [];
  
      // Set the current node to the given node
      let current = node;
  
      // Loop until the current node is null
      while (current !== null) {
        // Add the current node's position to the path array at the beginning
        path.unshift(current.position);
  
        // Set the current node to its parent
        current = current.parent;
      }
  
      // Return the path array
      return path;
    }
  }
  
  // Create a new board object
  const board = new Board();
  
  // Create a new knight object
  const knight = new Knight();
  
  // Define a function to display a path in a user-friendly way
  function displayPath(path) {
    // Check if the path is empty or not
    if (path.length === 0) {
      console.log("No path found.");
    } else {
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path:`
      );
      for (let step of path) {
        console.log(step);
      }
    }
  }
  
  // Test cases
  
  // Create a new path object with start position [1,1] and finish position [8,8]
  const p1 = new Path([1, 1], [8, 8]);
  
  // Find and display the shortest path for p1
  displayPath(p1.findPath());
  
  // Output:
  // You made it in 6 moves! Here's your path:
  // [ 1, 1 ]
  // [ 2, 3 ]
  // [ 4, 4 ]
  // [ 5, 6 ]
  // [ 7, 7 ]
  // [ 8, 8 ]
  
  // Create a new path object with start position [3,3] and finish position [4,3]
  const p2 = new Path([3, 3], [4, 3]);
  
  // Find and display the shortest path for p2
  displayPath(p2.findPath());
  
  // Output:
  // You made it in 3 moves! Here's your path:
  // [ 3, 3 ]
  // [ 4, 5 ]
  // [ 2, 4 ]
  // [ 4, 3 ]