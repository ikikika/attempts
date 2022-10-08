// Given the root of a binary tree containing integers,
// print each column from left to right,
// and within each column print the values from top to bottom

// This solution is taken from https://www.geeksforgeeks.org/print-binary-tree-vertical-order/
// I have no experience with binary trees and it is not possible for me to properly study and understand it within the deadline.

class Node {
  constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
  }
}

let root,
  min = 0,
  max = 0;

// A utility function to find min and
// max distances with respect
// to root.
function findMinMax(node, hd) {
  // Base case
  if (node == null) return;

  // Update min and max
  if (hd < min) min = hd;
  else if (hd > max) max = hd;

  // Recur for left and right subtrees
  findMinMax(node.left, hd - 1);
  findMinMax(node.right, hd + 1);
}

// A utility function to print all nodes on a given line_no.
// hd is horizontal distance of
// current node with respect to root.
function printVerticalLine(node, line_no, hd) {
  // Base case
  if (node == null) return;

  // If this node is on the given line number
  if (hd == line_no) console.log(node.data + " ");

  // Recur for left and right subtrees
  printVerticalLine(node.left, line_no, hd - 1);
  printVerticalLine(node.right, line_no, hd + 1);
}

// The main function that prints a given binary tree in
// vertical order
function verticalOrder(node) {
  // Find min and max distances with resepect to root
  findMinMax(node, 0);

  // Iterate through all possible vertical lines starting
  // from the leftmost line and print nodes line by line
  for (let line_no = min; line_no <= max; line_no++) {
    printVerticalLine(node, line_no, 0);
    console.log("---");
  }
}

/* Let us construct the tree shown in above diagram */
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);

verticalOrder(root);
