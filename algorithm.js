//#1 Написать свою реализацию бинарного дерева поиска. 

class BinaryTree {
    constructor() {
        this.root = null;
    }

    createNewNode(data) {
        // debugger
        let newNode = {};

        if (this.root === null) {
            this.root = {
                value: data,
                left: null,
                right: null,
            }

            return this.root;
        } else {
            newNode = {
                value: data,
                left: null,
                right: null,
            }
        }

        return this.add(this.root, newNode);
    }

    add(node, newNode) {//добавление нового узла

        if (node.value > newNode.value) {

            if (node.left === null) {
                node.left = newNode;
            } else {

                return this.add(node.left, newNode);
            }
        } else {

            if (node.right === null) {
                node.right = newNode;
            }

            return this.add(node.right, newNode);
        }

        return node;
    }

    search(element, node) {//поиск заданного узла
        // debugger

        if (node === null) {
            return null;
        }

        node = node || this.root;

        if (element === node.value) {
            return node;
        } else if (element < node.value) {
            return this.search(element, node.left);
        } else if (element > node.value) {
            return this.search(element, node.right);
        }

        return node;
    }

    findParent(element, nodeParent) {//поиск родителя, удаляемого узла
        //debugger
        nodeParent = nodeParent || this.root;

        if (element === nodeParent.value) {

            return nodeParent;
        } else if (nodeParent.left != null && nodeParent.right != null) {

            if ((element === nodeParent.right.value) || (element === nodeParent.left.value)) {

                return nodeParent;
            } else if (element < nodeParent.value) {

                return this.findParent(element, nodeParent.left);
            } else if (element > nodeParent.value) {

                return this.findParent(element, nodeParent.right);
            }
        } else if (nodeParent.left === null && element != nodeParent.right) {

            if (element === nodeParent.right.value) {

                return nodeParent;
            } else if (element < nodeParent.value) {

                return this.findParent(element, nodeParent.left);
            } else if (element > nodeParent.value) {

                return this.findParent(element, nodeParent.right);
            }
        } else if (nodeParent.right === null && element != nodeParent.left) {

            if (element === nodeParent.left.value) {

                return nodeParent;
            } else if (element < nodeParent.value) {

                return this.findParent(element, nodeParent.left);
            } else if (element > nodeParent.value) {

                return this.findParent(element, nodeParent.right);
            }
        }

        return nodeParent;
    }

    findMinimalNode(node) {//поиск минимального узла в левых ветках
        // debugger
        if (node.left === null) {
            return node;
        }

        return this.findMinimalNode(node.left);
    }

    delete(element) {
        // debugger
        let nodeParent = this.findParent(element);
        let node = this.search(element);

        //удаление узла без потомков
        if (node.left === null && node.right === null) {

            if (nodeParent.left === null && nodeParent.right.value === node.value) {
                nodeParent.right = null;

                return nodeParent;
            }
            nodeParent.left = null;

            return nodeParent;
        }

        //удаление узла с одним потомком
        if (node.left === null) {

            if (nodeParent.value > node.value) {
                nodeParent.left = node.right;

                return nodeParent;
            }
            nodeParent.right = node.right;

            return nodeParent;
        }
        
        if (node.right === null) {

            if (nodeParent.value > node.value) {
                nodeParent.left = node.left;

                return nodeParent;
            }
            nodeParent.right = node.left;

            return nodeParent;
        }

        //удаление узла с двумя потомками
        let minNode = this.findMinimalNode(node.right);
        this.delete(minNode.value);
        node.value = minNode.value;

        return node;
    }

}

const arrayForNode = [33, 1, 4, 9, 7, 44, 706, 88, 22, 65, 8, 45, 710, 3, 2, 10, 99, 27, 17, 100, -2];

const binaryTree = new BinaryTree();

for (let i = 0; i < arrayForNode.length; i++) {
    binaryTree.createNewNode(arrayForNode[i]);
};

//#2 Написать сортировку двумя различными методами

//Сортировка вставками

Array.prototype.insertSort = function (callback) {

    for (let i = 0; i < this.length; i++) {
        let buf = this[i];
        let j = i - 1;
        while (j >= 0 && callback(this[j], buf)) {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = buf;
    }
    return this;
}

//сортировка выбором

Array.prototype.selectionSort = function (callback) {

    for (let i = 0; i < this.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < this.length; j++) {
            if (callback(this[j], this[min])) {
                min = j;
            }
        }
        let buf = this[min];
        this[min] = this[i];
        this[i] = buf;
    }
    return this;
}
