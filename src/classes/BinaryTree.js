const Node = require("./Node");

class BinaryTree{

    //When a binary tree is declared, it is declared with an empty root
    constructor(){
        this.root = null;
    }

    //Operations
    insertValue(value){

        /**
         * 1 - First check if the received variable has a correct value
         * 2 - Check if the binary tree is empty
         * 3 - If is not empty,check where the new node has to be inserted
         */
        if(value === undefined || value === null)
            return;
        let newNode = new Node(value);

        if (this.root === null){
            this.root = newNode;
            return;
        }
        
        this.insertNode(this.root, newNode);
    }

    insertNode(nodeToStartSearching, newNodeToInsert){

        /**
         * 1 - First check if the received variables has a correct value
         * 2 - Check if the value has to be added to the right or left in the tree depending on the new node's value
         * 3 - If when the second step is applied it reachs out a null value, then the new node is inserted there
         *     On the other hand, the second step still happening until the first condition of this step is achieved
         */

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
                this.insertNode(nodeToStartSearching.right, newNodeToInsert);
            }
        }
    }

    toString(){
        return this.toStringRecursively(this.root);
    }

    toStringRecursively(nodeToBeginPrint){

        /**
         * 1 - Check if is the received node is a valid node
         * 2 - If the left children exists and it differents from null, then it calls to the same function to print and check the left children and its childrens
         * 3 - If the right children exists and it differents from null, then it calls to the same function to print and check the right children and its childrens
         * 4 - return the actual node
         */
        if (nodeToBeginPrint === undefined || nodeToBeginPrint === null){
            return "";
        }
        if(nodeToBeginPrint.left !== undefined || nodeToBeginPrint.left === null)
            this.toStringRecursively(nodeToBeginPrint.left);

        if(nodeToBeginPrint.right !== undefined || nodeToBeginPrint.right === null)
            this.toStringRecursively(nodeToBeginPrint.right);
        return nodeToBeginPrint;
    }
}

module.exports = BinaryTree;