class Node {
  constructor(value, description) {
    this.value = value;
    this.description = description;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value, description) {
    const newNode = new Node(value, description);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode.description;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

}


var tree = new BinaryTree();

tree.insert(0, "Growth?")
tree.insert(-2, "Looking for current market growth?")
tree.insert(-3, "Are these issues of something team resources?")
tree.insert(-1, "Looking for new market growth?")
tree.insert(2, "Team/working issues?")
tree.insert(1, "Clarity of goal?")
tree.insert(3, "Wishing to transform?")


//console.log(tree.search(2));


var count = 0;

function toggleContent() {

  var content = document.querySelector('.content');
  content.classList.toggle('show');
  count = count + 1;

  if (content.classList.contains('show')) {
    var newButton = document.createElement('button');
    newButton.className = 'button';
    newButton.innerHTML = "Start Questions Here";
    if (count < 2 ){
    content.appendChild(newButton);}
    newButton.onclick = function() {
      addQuestion();
      content.removeChild(newButton);
    };
  } else {
    var buttons = document.querySelectorAll('.new-button');
    buttons.forEach(function(button) {
      content.removeChild(button);
    });
  }
}

function addQuestion() {
  var content = document.querySelector('.content');
  var currentNode = tree.root;
  console.log(currentNode.left.description);
    var question = document.createElement('p');
    question.className = 'question';
    question.innerHTML = currentNode.description;
    leftNode = currentNode.left;
    rightNode = currentNode.right;
    rightNodeValue = rightNode.value;
    leftNodeValue = leftNode.value;
    console.log("Desc of left: " + leftNode.description + " Value of left: " +leftNodeValue)
    console.log("Desc of right: " + rightNode.description + " Value of right: " +rightNodeValue)

    content.appendChild(question);
    var yes = document.createElement('button');
    yes.className = 'answer';
    yes.innerHTML = "Yes";
    yes.addEventListener('click', function() {
      if(currentNode.right === null || currentNode.left === null ){
        yes.className = 'answer-disabled';
        no.className = 'answer-disabled';
      }
      currentNode = currentNode.left;
      yes.innerHTML = "Yes";
      question.innerHTML = currentNode.description;
    });
    content.appendChild(yes);

    var no = document.createElement('button');
    no.className = 'answer';
    no.innerHTML = "No";
    no.addEventListener('click', function() {
      if(currentNode.right === null || currentNode.left === null ){
        yes.className = 'answer-disabled';
        no.className = 'answer-disabled';
      }
      currentNode = currentNode.right;
      no.innerHTML = "No";
      question.innerHTML = currentNode.description;
    });
    content.appendChild(no);
}










  