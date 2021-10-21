"use strict"

 //#1 Написать свою реализацию функций bind, call.
let user = {
    name: 'Vasya',
    age: 23,
};

let user2 = {
    name: 'Petya',
    age: 34,
}

let user3 = {
    name: 'Tanya',
    age: 20,
}

function userData(phone, city) {
    console.log(`Name: ${this.name}, Age: ${this.age}, Tel: ${phone}, City: ${city}`);
}
Function.prototype.myBind = function (context, ...args) {
    return (...rest) => {
        let bufferObj = Object.create(context);
        bufferObj.func = this;
        let result = bufferObj.func(...args, ...rest);
        return result;
    }
}
const foo = userData.myBind(user, '11117711111', 'Kharkiv')();

Function.prototype.myCall = function (context, ...args) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...args);
    return result;
}
const foo2 = userData.myCall(user2, '222222222', 'Kiev');

Function.prototype.myApply = function (context, argsArray) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...argsArray);
    return result;
}
const foo3 = userData.myApply(user3, ['333333333', 'Lviv']);


//#2 Написать свою реализацию функций map, filter, reduce, forEach.
const arr = [1, 2, 3, 4, 5, 7, 8];

Array.prototype.myMap = function (callback) {
    const resultArrayElem = [];
    for (let i = 0; i < this.length; i++) {
        resultArrayElem[i] = callback(this[i], i, this);
    }
    return resultArrayElem;
};

Array.prototype.myFilter = function (callback) {
    const resultArrayElem = [];
    for (let i = 0; i < this.length; i++) {
        const isTrueElem = callback(this[i], i, this);
        if (isTrueElem) {
            resultArrayElem[resultArrayElem.length] = this[i];
        }
    }
    return resultArrayElem;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let result;
    let i = 0;

    if (arguments.length >= 2) {
        result = initialValue;
    } else {
        result = this[i];
        i++;
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
};


Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

//#3 Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи.
//(Реализовать с помощью итератора и генератора)

//итератор

let objFibonacciIterator = {
    first: 0,
    second: 1,
    last: 100,
    [Symbol.iterator]() {
        this.current = this.first;
        return this;
    },
    next() {
        if (this.current <= this.last) {
            if (this.current === 0) {
                return { done: false, value: this.current++ }
            }
            this.current = this.first + this.second;
            this.first = this.second;
            this.second = this.current;
            return { done: false, value: this.first };
        } else {
            return { done: true };
        }
    }
};

for (let num of objFibonacciIterator) {
    console.log(num);
};

//генератор

function* generateFibonacci() {
    let first = 0;
    let second = 1;
    while (true) {
        let current = first;
        first = second;
        second = current + first;
        yield current;
    }
};

let generator = generateFibonacci();

for (let i = 0; i < 10; i++) {
    console.log(generator.next().value);
};

//итератор + генератор

let objFibonacciIteratorVsGenerator = {
    first: 0,
    second: 1,
    last: 100,
    *[Symbol.iterator]() {
        for (let value = this.first; value <= this.last; value = this.first + this.second) {
            this.first = this.second;
            this.second = value;
            yield value;
        }
    }
};
