class Node{

    //When a node is created, only is going to have its data value, its siblings will be empty.
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = Node;