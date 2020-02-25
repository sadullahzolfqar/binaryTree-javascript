const BinarySearchTree = require('../src/js/binar-search-tree');


test('Test Binary Search Tree', () => {
    const testTree = new BinarySearchTree(20);
    
    testTree.insertNode(20);
    testTree.insertNode(10);
    testTree.insertNode(30);
    testTree.insertNode(25);
    testTree.insertNode(21);
    testTree.insertNode(78);
    testTree.insertNode(12);
    testTree.insertNode(65);
    testTree.insertNode(22);
    testTree.insertNode(19);
    testTree.insertNode(18);
    testTree.insertNode(53);
    testTree.insertNode(67);
    testTree.insertNode(21);
    testTree.insertNode(29);
    testTree.insertNode(23);
    testTree.insertNode(97);
    testTree.insertNode(43);
    testTree.insertNode(132);
    testTree.insertNode(232);
    testTree.insertNode(223);
    testTree.insertNode(23);
    testTree.insertNode(2);
    testTree.insertNode(67);

    expect(testTree.findNode(67)).toBe(true);
    expect(testTree.findNode(2)).toBe(true);
    expect(testTree.findNode(1)).toBe(false);

    expect(testTree.findNode(97)).toBe(true);
    testTree.removeNode(97);
    expect(testTree.findNode(97)).toBe(false);

});