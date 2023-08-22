const {request, response} = require('express');
const BinaryTree = require('../classes/BinaryTree');
const Node = require('../classes/Node');
const insertNewValue = async(req = request, res = response) => {

    /**
     * 1 - Obtain the values in the request body
     * 2 - Create a new Binary tree
     * 3 - If the tree field is null, the new value to insert is the root. Therefore, it returns a new tree with the root mentioned before
     * 4 - If the tree field is not null, then the new value should be inserted depending on the tree structure received. It will be also necessary to configure the root node. 
     */
    const {value, tree} = req.body;
    const binaryTree = new BinaryTree();
    
    if(tree === null){
        binaryTree.insertValue(value);
        return res.status(200).json(binaryTree.toString());
    }
    
    const newRoot = new Node(tree.value);
    newRoot.left = tree.left;
    newRoot.right = tree.right;
    binaryTree.root = newRoot;
    binaryTree.insertValue(value);
    return res.status(200).json(binaryTree.toString());
}

const testConnection = async(req = request, res = response) => {

    //Function to test the connection with the operation module.
    return res.status(200).json("Hello world");
}
module.exports = {
    insertNewValue,
    testConnection
}