"use strict"

//exercise №1 Написать функцию которая проверяет являются ли две строки анаграммой или нет

function verifyAnagrams(word1, word2) {
    if (word1.length == word2.length) { //сравниваем длины вводимых строк. Если равны, проверяем дальше.
        let wordArray1 = word1.split('').sort();//разбиваем строку на массив символов  и сортируем
        let wordArray2 = word2.split('').sort();

        let equalCount = 0;
        for (let i = 0; i < word1.length; i++) {
            if (wordArray1[i] == wordArray2[i]) { //сравниваем поэлементно массивы. Если эл-ты равны, увеличиваем счетчик
                equalCount++;
            }
        }
        return equalCount == word1.length;//если счетчик равен длине строки, то строки явл. анаграммами
    }
    return false;
}

//exercise №3 Написать функцию, которая вычисляет количество каждой цифры в числе

function countingNumbers(data) {
    let enterNumber = `${data}`.replace(/[^\d]/g, ''); //убираем из числа "-" "," "." "е" и переводим в строку
    let arrNumbers = [];
    let count = 0;
    const objAmountNumbers = {};
    arrNumbers = enterNumber.split(''); // разбиваем строку в массив
    for (let j = 0; j < arrNumbers.length; j++) {
        count = 0;
        //перебираем массив, ищем совпадения, увеличиваем счетчик
        for (let k = 0; k < arrNumbers.length; k++) {
            if (arrNumbers[j] == arrNumbers[k]) {
                count++;
            }
            objAmountNumbers[arrNumbers[j]] = count; // записываем результат в объект
        }
    }
    return objAmountNumbers;
}

//exercise №4 Написать функцию которая вычисляет подсчет уникальных слов в предложении

function findUniqueWords(sentence) {

    let spaceArray = [];
    let regPhrase = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let uniqueCount = 0;
    let count = 0;

    spaceArray = sentence.split(regPhrase); // удаляем из предложения символы отличные от букв и записываем оставшиеся слова в массив
    for (let i = 0; i < spaceArray.length; i++) {
        for (let j = 0; j < spaceArray.length; j++) {
            if (spaceArray[i] == spaceArray[j]) {
                count++;
            }
        }
        if (count == 1) {
            uniqueCount++;
        }
        count = 0;
    }
    return uniqueCount;
}

//exercise №5 Написать функцию которая вычисляет вхождение каждого слова в предложение

function calculateUniqueWords(newSentence) {

    let spaceArray = [];
    let regPhrase = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let wordsUniqueArray = [];
    let uniqueCount = 0;

    spaceArray = newSentence.split(regPhrase); // удаляем из предложения символы отличные от букв и записываем оставшиеся слова в массив

    for (let i = 0; i < spaceArray.length; i++) {
        for (let j = 0; j < spaceArray.length; j++) {
            if (spaceArray[i] == spaceArray[j]) {
                uniqueCount++;
            }
        }
        wordsUniqueArray[spaceArray[i]] = uniqueCount; //записываем слово и его кол-во вхождений в предложении в объект
        uniqueCount = 0;
    }
    return wordsUniqueArray;
}

//exercise №6 Написать функцию которая возвращает N первых чисел фибоначчи

function fibonacci(number) {
    const arrNumbersFibonacci = [0, 1];
    if (number === 0 || number == 1) {
        return number;
    } else {
        for (let i = 2; i < number; i++) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
        }
    }
    return arrNumbersFibonacci;
}

//exercise №7 Вычислить периметр и площадь для прямоугольника, треугольника и круга

class PerimetrVsSquare {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    perimetrCircle() {
        return (2 * Math.PI * this.side1);
    };

    perimetrRectangle() {
        return (2 * (this.side1 + this.side2));
    };

    perimetrsquareTriangle() {
        return (this.side1 + this.side2 + this.side3);
    };

    squareCircle() {
        return (Math.PI * (this.side1 * this.side1));
    };

    squareRectangle() {
        return (this.side1 * this.side2);
    };

    squareTriangle() {
        let semiPerimeter = (this.side1 + this.side2 + this.side3) / 2;
        console.log('semiPerimeter: ', semiPerimeter)
        return (Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3)));
    };
};

//exercise №8 Вычислить факториал числа

function factorialCalculation(numberForFactorial) {
    if (numberForFactorial > 0) {
        let factorialResult = 1;
        for (let i = 1; i < numberForFactorial + 1; i++) {
            factorialResult = factorialResult * i;
        }
        return factorialResult;
    } else if (numberForFactorial === 0) {
        factorialResult = 1;
        return factorialResult;
    }
}

//exercise №9 Посчитать сумму всех элементов массива, только тех которые 
//(Кратные двум, кратные трем, только положительные и нечетные)

function sumElementsMultipleX(arrayNumbers, x) {
    let sumMultipleX = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {

        if (arrayNumbers[i] % x == 0) {
            sumMultipleX += arrayNumbers[i];
        }
    }
    return sumMultipleX;
}

function sumElementsOnlyPositive(arrayNumbers) {
    let sumOnlyPositive = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            sumOnlyPositive += arrayNumbers[i];
        }
    }
    return sumOnlyPositive;
}

function sumElementsOnlyUneven(arrayNumbers) {
    let sumOnlyUneven = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 != 0) {
            sumOnlyUneven += arrayNumbers[i];
        }
    }
    return sumOnlyUneven;
}

//exercise №10 Посчитать количество элементов массива которые 
//(Нулевые, отрицательные, положительные, простые числа)

function amountZeroElements(arrayNumbers) {
    let amountZeroEl = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] == 0) {
            amountZeroEl++;
        }
    }
    return amountZeroEl;
}

function amountNegativeElements(arrayNumbers) {
    let amountNegativeEl = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] < 0) {
            amountNegativeEl++;
        }
    }
    return amountNegativeEl;
}

function amountPositiveElements(arrayNumbers) {
    let amountPositiveEl = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            amountPositiveEl++;
        }
    }
    return amountPositiveEl;
}

function amountSimpleElements(arrayNumbers) {
    let amountSimpleEl = 0;
    let countDenominator = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 2) {
            countDenominator = 0;
            for (let j = 2; j < arrayNumbers[i]; j++) {
                if (arrayNumbers[i] % j == 0) {
                    countDenominator++;
                }
            }
            if (countDenominator == 0) {
                amountSimpleEl++;
            }
        }
    }
    return amountSimpleEl;
}


//exercise №11 Написать функции, которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону

function decimalNumberConversToBinaryNumber(decimalNumber) {
    let arrayBinaryNumber = [];
    let binaryNumber = 0;
    for (let i = 0; decimalNumber > 0; i++) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
    }
    binaryNumber = arrayBinaryNumber.reverse().join('');
    return binaryNumber;
}

function binaryNumberConversToDecimalNumber(binaryNumber) {
    let sumDegree = 0;
    let arrayDegree = [];
    let stringNumber = String(binaryNumber);
    for (let i = 0; i < stringNumber.length; i++) {
        arrayDegree[i] = Math.pow(2, i);
    }
    arrayDegree.reverse();
    for (let j = 0; j < arrayDegree.length; j++) {
        if (stringNumber[j] == 1) {
            sumDegree += arrayDegree[j];
        }
    }
    return sumDegree;
}

//exercise №12 Пункты 9 и 10 выполнить для двумерных массивов

//(Кратные двум, кратные трем, только положительные и нечетные)

function sumElemMatrixMultipleX(matrix, x) {
    let sumElemMultipleX = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] % x == 0) {
                sumElemMultipleX += matrix[i][j];
            }
        }
    }
    return sumElemMultipleX;
}


function sumElemMatrixOnlyUneven(matrix) {
    let sumOnlyUneven = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] % 2 != 0) {
                sumOnlyUneven += matrix[i][j];
            }
        }
    }
    return sumOnlyUneven;
}

function sumElemMatrixOnlyPositive(matrix) {
    let sumOnlyPositive = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                sumOnlyPositive += matrix[i][j];
            }
        }
    }
    return sumOnlyPositive;
}

//(Нулевые, отрицательные, положительные, простые числа)

function amountZeroElemMatrix(matrix) {
    let amountZeroElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 0) {
                amountZeroElem++;
            }
        }
    }
    return amountZeroElem;
}

function amountNegativeElemMatrix(matrix) {
    let amountNegativeElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) {
                amountNegativeElem++;
            }
        }
    }
    return amountNegativeElem;
}

function amountPositiveElemMatrix(matrix) {
    let amountPositiveElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                amountPositiveElem++;
            }
        }
    }
    return amountPositiveElem;
}

function amountSimpleElemMatrix(matrix) {
    let amountSimpleElem = 0;
    let countDenominator = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 2) {
                countDenominator = 0;
                for (let k = 2; k < matrix[i][j]; k++) {
                    if (matrix[i][j] % k == 0) {
                        countDenominator++;
                    }
                }
                if (countDenominator == 0) {
                    amountSimpleElem++;
                }
                countDenominator = 0;
            }
        }
    }
    return amountSimpleElem;
}

//exercise №13 Посчитать сумму значений чисел от min до max (всех, только кратных 3, только положительные)

function sumRangeMinMax(min, max) {
    let sumFromMinBeforeMax = 0;
    for (let i = min; i <= max; i++) {
        sumFromMinBeforeMax += i;
    }
    return sumFromMinBeforeMax;
}

function sumRangeMinMaxMultiplesThree(min, max) {
    let sumMultiplesThree = 0;
    for (let i = min; i <= max; i++) {
        if (i % 3 == 0) {
            sumMultiplesThree += i;
        }
    }
    return sumMultiplesThree;
}

function sumRangeMinMaxOnlyPositive(min, max) {
    let sumOnlyPositiveElements = 0;
    for (let i = min; i <= max; i++) {
        if (i > 0) {
            sumOnlyPositiveElements += i;
        }
    }
    return sumOnlyPositiveElements;
}

//exercise №14 Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные)

function sumElem(a, b) {
    return a + b;
}

function meanSingleArrayAllElem(arrElements, callback) {
    let meanAllElem = 0;
    let countAll = 0;
    for (let i = 0; i < arrElements.length; i++) {
        meanAllElem = callback(meanAllElem, arrElements[i]);
        countAll++;
    }
    return meanAllElem / countAll;
}

function meanSingleArrayEvenElem(arrElements, callback) {
    let meanEvenElem = 0;
    let countEven = 0;
    for (let i = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 == 0) {
            meanEvenElem = callback(meanEvenElem, arrElements[i]);
            countEven++;
        }
    }
    return meanEvenElem / countEven;
}

function meanSingleArrayUnevenElem(arrElements, callback) {
    let meanUnevenElem = 0;
    let countUneven = 0;
    for (let i = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem = callback(meanUnevenElem, arrElements[i]);
            countUneven++;
        }
    }
    return meanUnevenElem / countUneven;
}

function meanDimensionalArrayAllElem(matrix, callback) {
    let meanAllElem = 0;
    let countAll = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            meanAllElem = callback(meanAllElem, matrix[j][k]);
            countAll++;
        }
    }
    return meanAllElem / countAll;
}

function meanDimensionalArrayEvenElem(matrix, callback) {
    let meanEvenElem = 0;
    let countEven = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 == 0) {
                meanEvenElem = callback(meanEvenElem, matrix[j][k]);
                countEven++;
            }
        }
    }
    return meanEvenElem / countEven;
}

function meanDimensionalArrayUnevenElem(matrix, callback) {
    let meanUnevenElem = 0;
    let countUneven = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 != 0) {
                meanUnevenElem = callback(meanUnevenElem, matrix[j][k]);
                countUneven++;
            }
        }
    }
    return meanUnevenElem / countUneven;
}

//exercise №15 Транспонировать матрицу

function transpositionMatrix(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
    };
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[j].push(matrix[i][j]);
        };
    };
    return newMatrix;
}

//exercise №16 Сложить две матрицы

function sumTwoMatrix() {
    const matrixFirst = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
    const matrixSecond = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
    for (let i = 0; i < matrixFirst.length; i++) {
        for (let j = 0; j < matrixFirst.length; j++) {
            matrixFirst[i][j] += matrixSecond[i][j];
        }
    }
    return matrixFirst;
}




//exercise №17 Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

/* function deleteLineWithZeroElement(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                i = -1;
                break;
            }
        }
    }
    return matrix;
} */

function deleteColumnWithZeroElement(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[j][i] == 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
    }
    return matrix;
}
// console.log(deleteColumnWithZeroElement([[1, 0, 3, 4], [1, 2, 3, 4], [1, 2, 3, 0], [1, 2, 3, 4]]))