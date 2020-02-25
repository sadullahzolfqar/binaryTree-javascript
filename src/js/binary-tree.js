'use strict';

const Node = require('./node');

class BinaryTree extends Node {
    constructor(value) {
        super(value)
    }

    insertLeftChild(value) {
        if(this.leftChild == undefined){
            this.leftChild = new BinaryTree(value);
        }
        else{
            let newNode = new BinaryTree(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    insertRightChild(value) {
        if(this.rightChild ==  undefined) {
            this.rightChild = new BinaryTree(value);
        }
        else {
            let newNode  = new BinaryTree(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }

    preOrder(){
        //print this.value
        if(this.leftChild) {
            this.leftChild.preOrder();
        }
        if(this.rightChild) {
            this.rightChild.preOrder();
        }
    }

    inOrder(){
        ///
    }

    postOrder(){
        ///
    }

    
}

module.exports = BinaryTree;