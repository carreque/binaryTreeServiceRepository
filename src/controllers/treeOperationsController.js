const {request, response} = require('express');
const BinaryTree = require('../classes/BinaryTree');
const Node = require('../classes/Node');
const insertNewValue = async(req = request, res = response) => {
    const {value, tree} = req.body;
    const binaryTree = new BinaryTree();
    
    if(tree === null){
        
        binaryTree.insertValue(value);
        return res.status(200).json(binaryTree.toString());
    }
    
    console.log(tree.value);
    const newRoot = new Node(tree.value);
    newRoot.left = tree.left;
    newRoot.right = tree.right;
    binaryTree.root = newRoot;
    binaryTree.insertValue(value);
    return res.status(200).json(binaryTree.toString());
}

const testConnection = async(req = request, res = response) => {
    return res.status(200).json("Hello world");
}
module.exports = {
    insertNewValue,
    testConnection
}