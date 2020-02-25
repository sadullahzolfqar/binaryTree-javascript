'use strict';

const Node = require('./node');

class BinarySearchTree extends Node {
    constructor(value) {
        super(value);
    }

    insertNode(value) {
        if(value <= this.value && this.leftChild) {
            this.leftChild.insertNode(value);
        }
        else if(value <=  this.value) {
            this.leftChild = new BinarySearchTree(value);
        }
        else if(value > this.value && this.rightChild) {
            this.rightChild.insertNode(value);
        }
        else {
            this.rightChild = new BinarySearchTree(value);
        }
    }

    removeNode(value, parent) {
        if(value < this.value && this.leftChild){
            return this.leftChild.removeNode(value,this);
        }
        else if(value < this.value){
            return false;
        }
        else if(value > this.value && this.rightChild){
            return this.rightChild.removeNode(value,this);
        }
        else if(value > this.value){
            return false;
        }
        else {
            if(this.leftChild == undefined && this.rightChild == undefined && this == parent.leftChild){
                parent.leftChild = undefined;
                this.clearNod();
            }
            else if(this.leftChild == undefined && this.rightChild == undefined && this == parent.rightChild){
                parent.rightChild = undefined;
                this.clearNod();
            }
            else if(this.leftChild && this.rightChild == undefined && this == parent.leftChild){
                parent.leftChild = this.leftChild;
                this.clearNod();
            }
            else if(this.leftChild && this.rightChild == undefined && this == parent.rightChild){
                parent.rightChild = this.leftChild;
                this.clearNod();
            }
            else if(this.rightChild && this.leftChild == undefined && this == parent.leftChild){
                parent.leftChild = this.rightChild;
                this.clearNod();
            }
            else if(this.rightChild && this.leftChild == undefined && this == parent.rightChild){
                parent.rightChild = this.rightChild;
                this.clearNod();
            }
            else {
                this.value = this.right_child.findMinimumValue()
                this.right_child.removeNode(this.value, this)
            }
        }
    }

    findNode(value) {
        if(value < this.value && this.leftChild) {
            return this.leftChild.findNode(value);
        }
        if(value > this.value && this.rightChild) {
            return this.rightChild.findNode(value);
        }

        return value == this.value;
    }

    clearNod() {
        delete this;
    }

    findMinimumValue() {
        if(this.leftChild){
            return this.leftChild.findMinimumValue();
        }
        else {
            this.value;
        }
    }

}

module.exports = BinarySearchTree;