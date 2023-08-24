class Node{

    //When a node is created, It is created with a value and without childrens.
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = Node;