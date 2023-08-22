const Node = require("./Node");

class BinaryTree{

    //When a binary tree is declared, it is declared empty
    constructor(){
        this.root = null;
    }

    //Operations
    insertValue(value){

        if(value === null)
            return;
        let newNode = new Node(value);

        if (this.root === null){
            this.root = newNode;
            return;
        }
        
        this.insertNode(this.root, newNode);
    }

    insertNode(nodeToStartSearching, newNodeToInsert){

        if(nodeToStartSearching === null || newNodeToInsert === null || nodeToStartSearching === undefined || newNodeToInsert === undefined)
            return;
        if(newNodeToInsert.value < nodeToStartSearching.value){
            
            if(nodeToStartSearching.left === null){
                nodeToStartSearching.left = newNodeToInsert;
            }else{
                this.insertNode(nodeToStartSearching.left, newNodeToInsert);
            }
        }else{
            if(nodeToStartSearching.right === null){
                nodeToStartSearching.right = newNodeToInsert;
            }else{
                console.log('node searching es ', nodeToStartSearching);
                this.insertNode(nodeToStartSearching.right, newNodeToInsert);
            }
        }
    }

    toString(){
        return this.toStringRecursively(this.root);
    }

    toStringRecursively(nodeToBeginPrint){

        if (nodeToBeginPrint === undefined || nodeToBeginPrint === null){
            return "";
        }
        if(nodeToBeginPrint.left !== undefined)
            this.toStringRecursively(nodeToBeginPrint.left);

        if(nodeToBeginPrint.right !== undefined)
            this.toStringRecursively(nodeToBeginPrint.right);
        return nodeToBeginPrint;
    }
}

module.exports = BinaryTree;