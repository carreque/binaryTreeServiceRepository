const BinaryTree = require("../classes/BinaryTree");

describe("Test binary search",() => {

    test('When root is null it returns an empty string and value and childs are null', () => {
        const binaryTreeTest = new BinaryTree();
        expect(binaryTreeTest.root).toBeNull();
        expect(binaryTreeTest.toString()).toBe("");
     });
    
    test('When binaryTree only has a unique value returns just value', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left).toBeNull();
        expect(binaryTreeTest.root.right).toBeNull();
    });

    test('When binaryTree has an initial value and another greater value is added to the tree, it turns it into the right child', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(5);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left).toBeNull();
        expect(binaryTreeTest.root.right.value).toBe(5);
    });

    test('When binaryTree has an initial value and another lower value is added to the tree, it turns it into the left child', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(1);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left.value).toBe(1);
        expect(binaryTreeTest.root.right).toBeNull();
    });

    test('When binaryTree has an initial value and another equal value is added to the tree, it turns it into the right child', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(3);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left).toBeNull();
        expect(binaryTreeTest.root.right.value).toBe(3);
    });

    //matizar greater or equal
    test('When a binaryTree has a root, left and right values and a new greater value is inserted, then it creates a second level and add to the right-right tree part the new value', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(2);
        binaryTreeTest.insertValue(5);
        binaryTreeTest.insertValue(15);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left.value).toBe(2);
        expect(binaryTreeTest.root.right.value).toBe(5);
        expect(binaryTreeTest.root.right.right.value).toBe(15);
        expect(binaryTreeTest.root.right.left).toBeNull();
    });

    test('When a binaryTree has a root, left and right values and a lower greater value is inserted, then it creates a second level and add to the right-left the new value', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(2);
        binaryTreeTest.insertValue(7);
        binaryTreeTest.insertValue(5);
        expect(binaryTreeTest.root.value).toBe(3);
        expect(binaryTreeTest.root.left.value).toBe(2);
        expect(binaryTreeTest.root.right.value).toBe(7);
        expect(binaryTreeTest.root.right.right).toBeNull();
        expect(binaryTreeTest.root.right.left.value).toBe(5);
    });

    test('When a binaryTree has a root, left and right values and a new lower value is inserted, then it creates a second level and add to the left-left tree part the new value', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(5);
        binaryTreeTest.insertValue(2);
        binaryTreeTest.insertValue(7);
        binaryTreeTest.insertValue(1);
        expect(binaryTreeTest.root.value).toBe(5);
        expect(binaryTreeTest.root.left.value).toBe(2);
        expect(binaryTreeTest.root.right.value).toBe(7);
        expect(binaryTreeTest.root.left.left.value).toBe(1);
        expect(binaryTreeTest.root.left.right).toBeNull();
    });

    //Matizar lower or equal
    test('When a binaryTree has a root, left and right values and a new lower value is inserted, then it creates a second level and add to the left-right tree part the new value', () => {
        const binaryTreeTest = new BinaryTree();
        binaryTreeTest.insertValue(5);
        binaryTreeTest.insertValue(3);
        binaryTreeTest.insertValue(7);
        binaryTreeTest.insertValue(4);
        expect(binaryTreeTest.root.value).toBe(5);
        expect(binaryTreeTest.root.left.value).toBe(3);
        expect(binaryTreeTest.root.right.value).toBe(7);
        expect(binaryTreeTest.root.left.left).toBeNull();
        expect(binaryTreeTest.root.left.right.value).toBe(4);
    });

});