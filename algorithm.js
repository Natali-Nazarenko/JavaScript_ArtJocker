//#1 Написать свою реализацию бинарного дерева поиска. 
//(Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)

class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
        this.key = String(Date.now()) + Math.floor(Math.random() * 10000);
        this.parent = '';
    }
};

class BinaryTree {
    constructor() {
        this.root = null;
    };

    entry(data) {
        // debugger
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }
        return this.addNode(this.root, newNode);
    };

    addNode(node, newNode) {//добавление нового узла

        if (node.value > newNode.value) {

            if (node.left === null) {
                node.left = newNode;
                newNode.parent = `${node.key}L`;
            } else {
                return this.addNode(node.left, newNode);
            }
        } else {

            if (node.right === null) {
                node.right = newNode;
                newNode.parent = `${node.key}R`;
            } else {
                return this.addNode(node.right, newNode);
            }
        }
        return node;
    };

    searchNode(element, node = this.root) {//поиск заданного узла

        if (element === node.value) {
            return node;
        } else if (element < node.value) {
            return this.searchNode(element, node.left);
        } else if (element > node.value) {
            return this.searchNode(element, node.right);
        }
        return node;
    };

    findParent(element, key, node = this.root) {//поиск родителя, удаляемого узла
        // debugger
        if (key == node.key) {
            return node;
        } else if (element < node.value) {
            return this.findParent(element, key, node.left);
        } else if (element > node.value) {
            return this.findParent(element, key, node.right);
        }
        return node;
    };

    findMinimalNode(node) {//поиск минимального узла в левых ветках
        // debugger
        if (node.left === null) {
            return node;
        }
        return this.findMinimalNode(node.left);
    };

    deleteNode(element, startingNode) {
        // debugger
        let node = this.searchNode(element, startingNode);
        let letter = node.parent[node.parent.length - 1];
        let keyParent = node.parent.slice(0, -1);

        //удаление узла без потомков
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        //удаление узла с одним потомком
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }

        //удаление узла с двумя потомками
        let parentNode = this.findParent(element, keyParent);
        let newNode = this.findMinimalNode(node.right);
        let cloneNewNode = new Node(newNode.value);
        cloneNewNode = Object.assign(cloneNewNode, newNode);

        if (letter === 'R') {
            parentNode.right = cloneNewNode;
            cloneNewNode.left = node.left;
            cloneNewNode.parent = `${parentNode.key}R`;

            if (node.right.value != newNode.value) {
                cloneNewNode.right = node.right;
                node.right.left = newNode.right;
            } else {
                parentNode.right.right = newNode.right;
            }
            return parentNode;
        }

        if (letter === 'L') {
            parentNode.left = cloneNewNode;
            cloneNewNode.left = node.left;
            cloneNewNode.parent = `${parentNode.key}L`;

            if (node.right.value != newNode.value) {
                cloneNewNode.right = node.right;
                node.right.left = newNode.right;
            } else {
                parentNode.left.right = newNode.right;
            }
            return parentNode;
        }
    };
};

const arrayForNode = [33, 1, 4, 9, 7, 44, 706, 88, 22, 65, 8, 45, 710, 3, 2, 10, 99, 27, 17, 100, -2];

const binaryTree = new BinaryTree();

for (let i = 0; i < arrayForNode.length; i++) {
    binaryTree.entry(arrayForNode[i]);
};

//#2 Написать сортировку двумя различными методами

//Сортировка вставками

Array.prototype.insertSort = function (callback) {
    let arraySort = this;
    for (let i = 0; i < arraySort.length; i++) {
        let buf = arraySort[i];
        let j = i - 1;
        while (j >= 0 && callback(arraySort[j], buf)) {
            arraySort[j + 1] = arraySort[j];
            j--;
        }
        arraySort[j + 1] = buf;
    }
    return arraySort;
}

//сортировка выбором

Array.prototype.selectionSort = function (callback) {
    let arraySort = this;
    for (let i = 0; i < arraySort.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arraySort.length; j++) {
            if (callback(arraySort[j], arraySort[min])) {
                min = j;
            }
        }
        let buf = arraySort[min];
        arraySort[min] = arraySort[i];
        arraySort[i] = buf;
    }
    return arraySort;
}
