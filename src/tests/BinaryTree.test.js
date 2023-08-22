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

    test('When a binaryTree has a root, left and right values and a new greater or equal value than root and right-root child values is inserted, then it is inserted as the right child of the right-root child', () => {
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

    test('When a binaryTree has a root, left and right values and a greater or equal value than root value but lower than right-root child value is inserted, then it is inserted as the left child of the right-root child', () => {
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

    test('When a binaryTree has a root, left and right values and a new lower value than root and left-root child value is inserted, then it is inserted as the left child of the left-root child', () => {
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

    test('When a binaryTree has a root, left and right values and a new lower than root value but greater or equal than left-root child value is inserted, then it is inserted as the right child of the left-root child', () => {
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