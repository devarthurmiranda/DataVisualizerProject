class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const bst = new BinarySearchTree();

function insertNode() {
  const inputValue = document.getElementById('nodeValue').value;

  if (!isNaN(inputValue) && inputValue !== '') {
    // Parse the input value as an integer
    const value = parseInt(inputValue, 10);

    // Insert the node into the binary search tree
    bst.insert(value);

    // Visualize the tree
    visualizeTree();
  } else {
    alert('Please enter a valid number.');
  }
}

// Function to visualize the tree
function visualizeTree() {
// Get the SVG element
const svg = document.getElementById('treeVisualization');
// Clear the previous visualization
svg.innerHTML = '';

// Traverse the tree and create circles and lines
traverseTree(bst.root, 400, 40, 180);

function traverseTree(node, x, y, xOffset) {
  if (node !== null) {
    // Create circle for the node
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 20);
    svg.appendChild(circle);

    // Create text for the node value
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y + 5);
    text.textContent = node.data;
    svg.appendChild(text);

    // Draw line to the left child
    if (node.left !== null) {
      const lineLeft = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineLeft.setAttribute('x1', x);
      lineLeft.setAttribute('y1', y + 20);
      lineLeft.setAttribute('x2', x - xOffset);
      lineLeft.setAttribute('y2', y + 80);
      svg.appendChild(lineLeft);

      // Recursive call for left child
      traverseTree(node.left, x - xOffset, y + 80, xOffset / 2);
    }

    // Draw line to the right child
    if (node.right !== null) {
      const lineRight = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineRight.setAttribute('x1', x);
      lineRight.setAttribute('y1', y + 20);
      lineRight.setAttribute('x2', x + xOffset);
      lineRight.setAttribute('y2', y + 80);
      svg.appendChild(lineRight);

      // Recursive call for right child
      traverseTree(node.right, x + xOffset, y + 80, xOffset / 2);
    }
  }
}
}