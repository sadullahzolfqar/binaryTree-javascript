const binaryTree = require('../src/js/binary-tree');

test('create a binary tree object', () => {
    const testTree = new binaryTree('root');
    expect(testTree.value).toBe('root');
    expect(testTree.leftChild).toBe(undefined);
    expect(testTree.rightChild).toBe(undefined);
});

test('create a left child', () => {
    const testTree = new binaryTree('a');
    testTree.insertLeftChild('b');
    expect(testTree.value).toBe('a');
    expect(testTree.leftChild.value).toBe('b');
});

test('create a new left child', () => {
    const testTree = new binaryTree('a');
    testTree.insertLeftChild('b');
    testTree.insertLeftChild('c');
    expect(testTree.value).toBe('a');
    expect(testTree.leftChild.value).toBe('c');
});


test('create a right child', () => {
    const testTree = new binaryTree('a');
    testTree.insertRightChild('b');
    expect(testTree.value).toBe('a');
    expect(testTree.rightChild.value).toBe('b');
});

test('create a new right child', () => {
    const testTree = new binaryTree('a');
    testTree.insertRightChild('b');
    testTree.insertRightChild('c');
    expect(testTree.value).toBe('a');
    expect(testTree.rightChild.value).toBe('c');
});


test('Insert Data To binary tree',() => {
    const testTree = new binaryTree('a');
    testTree.insertRightChild('b');
    testTree.insertLeftChild('c');

    const bNode = testTree.rightChild;
    bNode.insertRightChild('d');

    const cNode = testTree.leftChild;
    cNode.insertRightChild('f');
    cNode.insertLeftChild('e');

    expect(testTree.value).toBe('a');
    expect(testTree.leftChild.value).toBe('c');
    expect(testTree.rightChild.value).toBe('b');

    expect(testTree.leftChild.value).toBe('c');
    expect(testTree.rightChild.rightChild.value).toBe('d');

});


