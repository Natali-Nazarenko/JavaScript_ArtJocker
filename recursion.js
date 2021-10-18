"use strict"

//#1 Написать функцию которая проверяет являются ли две строки анаграммой или нет

function verifyAnagramsRecurcion(string1, string2, i) {
    i = i || 0;
    if (i < string1.length) {
        if (string1 instanceof Array && string2 instanceof Array) {
            if (string1[i] === string2[i]) {
                return verifyAnagramsRecurcion(string1, string2, ++i);
            }
            return false;
        } else {
            if (string1.length === string2.length) {
                let wordArray1 = string1.split('').sort();
                let wordArray2 = string2.split('').sort();
                return verifyAnagramsRecurcion(wordArray1, wordArray2, i);
            }
            return false;
        }
    }
    return true;
}

//#3 Написать функцию, которая вычисляет количество каждой цифры в числе

function countingNumbers(data, i, j, objAmountNumbers, count) {
    // debugger;
    i = i || 0;
    j = j || 0;
    objAmountNumbers = objAmountNumbers || {};
    count = count || 0;

    if (data instanceof Array) { // если data уже массив

        if (j === data.length) {
            i++;

            if (objAmountNumbers[data[i]] === undefined) {
                j = 0;
                count = 0;
                return countingNumbers(data, i, j, objAmountNumbers, count);

            } else {
                return countingNumbers(data, ++i, j, objAmountNumbers, count);
            }
        }
        else {

            if (i < data.length) {

                if (data[i] == data[j]) {
                    objAmountNumbers[data[i]] = ++count;
                    return countingNumbers(data, i, ++j, objAmountNumbers, count);
                } else {
                    j++;
                    return countingNumbers(data, i, j, objAmountNumbers, count);
                }

            } else {
                return objAmountNumbers;
            }
        }

    } else {
        data = data.toString().split('');
        return countingNumbers(data, i, j, objAmountNumbers, count);
    }
}

//#4 Написать функцию которая вычисляет подсчет уникальных слов в предложении

function findUniqueWordsRec(sentence, i, j, uniqueCount, count) {
    // debugger;
    i = i || 0;
    j = j || 0;
    count = count || 0;
    uniqueCount = uniqueCount || 0;

    if (sentence instanceof Array) {

        if (j == sentence.length) {

            if (count == 1) {
                uniqueCount++;
            }
            j = 0;
            count = 0;
            return findUniqueWordsRec(sentence, ++i, j, uniqueCount, count);
        } else if (i < sentence.length) {

            if (sentence[i] == sentence[j]) {
                return findUniqueWordsRec(sentence, i, ++j, uniqueCount, ++count);
            } else {
                return findUniqueWordsRec(sentence, i, ++j, uniqueCount, count);
            }
        } else {
            return uniqueCount;
        }
    } else {
        sentence = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        console.log('sentence: ', sentence)
        return findUniqueWordsRec(sentence);
    }
}

//#5  Написать функцию которая вычисляет вхождение каждого слова в предложение

function findAmountWordsRec(sentence, i, j, wordsUniqueObj, count) {
    // debugger;
    i = i || 0;
    j = j || 0;
    wordsUniqueObj = wordsUniqueObj || {};
    count = count || 0;

    if (sentence instanceof Array) {

        if (j === sentence.length) {
            i++;

            if (wordsUniqueObj[sentence[i]] === undefined) {
                j = 0;
                count = 0;
                return findAmountWordsRec(sentence, i, j, wordsUniqueObj, count);

            } else {
                return findAmountWordsRec(sentence, i++, j, wordsUniqueObj, count);
            }
        }
        else {

            if (i < sentence.length) {

                if (sentence[i] == sentence[j]) {
                    wordsUniqueObj[sentence[i]] = ++count;
                    return findAmountWordsRec(sentence, i, ++j, wordsUniqueObj, count);
                } else {
                    j++;
                    return findAmountWordsRec(sentence, i, j, wordsUniqueObj, count);
                }

            } else {
                return wordsUniqueObj;
            }
        }

    } else {
        sentence = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        console.log('sentence: ', sentence)
        return findAmountWordsRec(sentence, i, j, wordsUniqueObj, count);
    }
}

//#6  Написать функцию которая возвращает N первых чисел фибоначчи

function fibonacciRec(number, i, arrNumbersFibonacci) {
    // debugger;
    i = i || 2;
    arrNumbersFibonacci = arrNumbersFibonacci || [0, 1];

    if (number === 0 || number === 1) {
        return number;
    } else {
        if (i < number) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
            return fibonacciRec(number, ++i, arrNumbersFibonacci)
        } else {
            return arrNumbersFibonacci;
        }
    }
}

//#8 Вычислить факториал числа

function factorialCalculationRec(number, i, factorialResult) {
    i = i || 1;
    factorialResult = factorialResult || 1;
    if (i <= number) {
        if (number > 0) {
            factorialResult = factorialResult * i;
            return factorialCalculationRec(number, ++i, factorialResult);
        } else if (number === 0) {
            return 1;
        }
    } else {
        return factorialResult;
    }
}

//#9 Посчитать сумму всех элементов массива, только тех которые 
//(Кратные двум, кратные трем, только положительные и нечетные)

function sumElementsMultipleTwo(arrayNumbers, i, sumMultipleTwo) {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleTwo(arrayNumbers, ++i, sumMultipleTwo);
    } else {
        return sumMultipleTwo;
    }
}

function sumElementsMultipleThree(arrayNumbers, i, sumMultipleTwo) {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 3 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleThree(arrayNumbers, ++i, sumMultipleTwo);
    } else {
        return sumMultipleTwo;
    }
}

function sumElementsOnlyPositive(arrayNumbers, i, sumMultipleTwo) {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyPositive(arrayNumbers, ++i, sumMultipleTwo);
    } else {
        return sumMultipleTwo;
    }
}

function sumElementsOnlyUneven(arrayNumbers, i, sumMultipleTwo) {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 != 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyUneven(arrayNumbers, ++i, sumMultipleTwo);
    } else {
        return sumMultipleTwo;
    }
}

//#10 Посчитать количество элементов массива которые 
//(Нулевые, отрицательные, положительные, простые числа)

function amountZeroElements(arrayNumbers, i, amountZero) {
    i = i || 0;
    amountZero = amountZero || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] == 0) {
            amountZero++;
        }
        return amountZeroElements(arrayNumbers, ++i, amountZero);
    } else {
        return amountZero;
    }
}

function amountNegativeElements(arrayNumbers, i, amountNegative) {
    i = i || 0;
    amountNegative = amountNegative || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] < 0) {
            amountNegative++;
        }
        return amountNegativeElements(arrayNumbers, ++i, amountNegative);
    } else {
        return amountNegative;
    }
}

function amountPositiveElements(arrayNumbers, i, amountPositive) {
    i = i || 0;
    amountPositive = amountPositive || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            amountPositive++;
        }
        return amountPositiveElements(arrayNumbers, ++i, amountPositive);
    } else {
        return amountPositive;
    }
}

function amountSimpleElements(arrayNumbers, i, amountSimple, countDenominator) {
    i = i || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;

    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 2) {
            countDenominator = 0;
            for (let j = 2; j < arrayNumbers[i]; j++) {
                if (arrayNumbers[i] % j == 0) {
                    countDenominator++;
                }
            }
            if (countDenominator == 0) {
                amountSimple++;
            }
        }
        return amountSimpleElements(arrayNumbers, ++i, amountSimple, countDenominator);
    } else {
        return amountSimple;
    }
}

//#11 Написать функции, которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону

function decimalNumberConversToBinaryNumber(decimalNumber, arrayBinaryNumber, i) {
    arrayBinaryNumber = arrayBinaryNumber || [];
    i = i || 0;
    // let binaryNumber = 0;
    if (decimalNumber > 0) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
        return decimalNumberConversToBinaryNumber(decimalNumber, arrayBinaryNumber, ++i);
    } else {
        return arrayBinaryNumber.reverse().join('');;
    }
}

function binaryNumberConversToDecimalNumber(binaryNumber, arrayDegree, i, sumDegree) {
    i = i || 0;
    sumDegree = sumDegree || 0;
    arrayDegree = arrayDegree || [];
    if (binaryNumber instanceof Array) {

        if (i < binaryNumber.length) {

            if (binaryNumber[i] == 1) {
                sumDegree += arrayDegree[i];
            }
            return binaryNumberConversToDecimalNumber(binaryNumber, arrayDegree, ++i, sumDegree);

        } else {
            return sumDegree;
        }

    } else {
        binaryNumber = String(binaryNumber).split('');
        for (let j = 0; j < binaryNumber.length; j++) {
            arrayDegree[j] = Math.pow(2, j);
        }
        return binaryNumberConversToDecimalNumber(binaryNumber.reverse(), arrayDegree);
    }
}

//#12 Пункты 9 и 10 выполнить для двумерных массивов
//Cумму - kратные двум, кратные трем, только положительные и нечетные

function sumElementsMatrixMultipleTwo(matrix, i, j, sumMultipleTwo) {
    i = i || 0;
    j = j || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleTwo(matrix, ++i, j, sumMultipleTwo);
        } else {
            if (matrix[i][j] % 2 == 0) {
                sumMultipleTwo += matrix[i][j];
            }
            return sumElementsMatrixMultipleTwo(matrix, i, ++j, sumMultipleTwo);
        }
    } else {
        return sumMultipleTwo;
    }
}

function sumElementsMatrixMultipleThree(matrix, i, j, sumMultipleThree) {
    i = i || 0;
    j = j || 0;
    sumMultipleThree = sumMultipleThree || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleThree(matrix, ++i, j, sumMultipleThree);
        } else {
            if (matrix[i][j] % 3 == 0) {
                sumMultipleThree += matrix[i][j];
            }
            return sumElementsMatrixMultipleThree(matrix, i, ++j, sumMultipleThree);
        }
    } else {
        return sumMultipleThree;
    }
}

function sumElementsMatrixOnlyPositive(matrix, i, j, sumPositive) {
    i = i || 0;
    j = j || 0;
    sumPositive = sumPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyPositive(matrix, ++i, j, sumPositive);
        } else {
            if (matrix[i][j] > 0) {
                sumPositive += matrix[i][j];
            }
            return sumElementsMatrixOnlyPositive(matrix, i, ++j, sumPositive);
        }
    } else {
        return sumPositive;
    }
}

function sumElementsMatrixOnlyUneven(matrix, i, j, sumUneven) {
    i = i || 0;
    j = j || 0;
    sumUneven = sumUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyUneven(matrix, ++i, j, sumUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                sumUneven += matrix[i][j];
            }
            return sumElementsMatrixOnlyUneven(matrix, i, ++j, sumUneven);
        }
    } else {
        return sumUneven;
    }
}

//Kоличество - Нулевые, отрицательные, положительные, простые числа

function amountMatrixZeroElements(matrix, i, j, amountZero) {
    i = i || 0;
    j = j || 0;
    amountZero = amountZero || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixZeroElements(matrix, ++i, j, amountZero);
        } else {
            if (matrix[i][j] === 0) {
                amountZero++;
            }
            return amountMatrixZeroElements(matrix, i, ++j, amountZero);
        }
    } else {
        return amountZero;
    }
}

function amountMatrixNegativeElements(matrix, i, j, amountNegative) {
    i = i || 0;
    j = j || 0;
    amountNegative = amountNegative || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixNegativeElements(matrix, ++i, j, amountNegative);
        } else {
            if (matrix[i][j] < 0) {
                amountNegative++;
            }
            return amountMatrixNegativeElements(matrix, i, ++j, amountNegative);
        }
    } else {
        return amountNegative;
    }
}

function amountMatrixPositiveElements(matrix, i, j, amountPositive) {
    i = i || 0;
    j = j || 0;
    amountPositive = amountPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixPositiveElements(matrix, ++i, j, amountPositive);
        } else {
            if (matrix[i][j] > 0) {
                amountPositive++;
            }
            return amountMatrixPositiveElements(matrix, i, ++j, amountPositive);
        }
    } else {
        return amountPositive;
    }
}

function amountMatrixSimpleElements(matrix, i, j, amountSimple, countDenominator) {
    i = i || 0;
    j = j || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;

    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixSimpleElements(matrix, ++i, j, amountSimple, countDenominator);
        } else {
            if (matrix[i][j] > 2) {
                countDenominator = 0;
                for (let k = 2; k < matrix[i][j]; k++) {
                    if (matrix[i][j] % k == 0) {
                        countDenominator++;
                    }
                }
                if (countDenominator == 0) {
                    amountSimple++;
                }
            }
            return amountMatrixSimpleElements(matrix, i, ++j, amountSimple, countDenominator);
        }
    } else {
        return amountSimple;
    }
}

//exercise №13 Посчитать сумму значений чисел от min до max (всех, только кратных 3, только положительные)

function sumRangeMinMax(min, max, sumFromMinBeforeMax) {
    sumFromMinBeforeMax = sumFromMinBeforeMax || 0;
    if (min <= max) {
        sumFromMinBeforeMax += min;
        return sumRangeMinMax(++min, max, sumFromMinBeforeMax);
    } else {
        return sumFromMinBeforeMax;
    }
}

function sumRangeMinMaxMultiplesThree(min, max, sumMultiplesThree) {
    sumMultiplesThree = sumMultiplesThree || 0;
    if (min <= max) {
        if (min % 3 == 0) {
            sumMultiplesThree += min;
        }
        return sumRangeMinMaxMultiplesThree(++min, max, sumMultiplesThree);
    } else {
        return sumMultiplesThree;
    }
}

function sumRangeMinMaxOnlyPositive(min, max, sumOnlyPositiveElements) {
    sumOnlyPositiveElements = sumOnlyPositiveElements || 0;
    if (min <= max) {
        if (min > 0) {
            sumOnlyPositiveElements += min;
            return sumRangeMinMaxOnlyPositive(++min, max, sumOnlyPositiveElements);
        } else {
            return sumRangeMinMaxOnlyPositive(++min, max, sumOnlyPositiveElements);
        }
    } else {
        return sumOnlyPositiveElements;
    }
}

//exercise №14 Найти среднее значение всех элементов одномерного/двумерного массива 
//(Среднее только тех, которые четные и которые не четные)

function meanSingleArrayAllElem(arrElements, i, meanAllElem, countAll) {
    i = i || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;

    if (i < arrElements.length) {
        meanAllElem += arrElements[i];
        countAll++;
        return meanSingleArrayAllElem(arrElements, ++i, meanAllElem, countAll);
    } else {
        return meanAllElem / countAll;
    }
}

function meanSingleArrayEvenElem(arrElements, i, meanEvenElem, countEven) {
    i = i || 0;
    meanEvenElem = meanEvenElem || 0;
    countEven = countEven || 0;
    if (i < arrElements.length) {
        if (arrElements[i] % 2 == 0) {
            meanEvenElem += arrElements[i];
            countEven++;
        }
        return meanSingleArrayEvenElem(arrElements, ++i, meanEvenElem, countEven);
    } else {
        return meanEvenElem / countEven;
    }
}

function meanSingleArrayUnevenElem(arrElements, i, meanUnevenElem, countUneven) {
    i = i || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < arrElements.length) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem += arrElements[i];
            countUneven++;
        }
        return meanSingleArrayUnevenElem(arrElements, ++i, meanUnevenElem, countUneven);
    } else {
        return meanUnevenElem / countUneven;
    }
}

function meanDimensionalArrayAllElem(matrix, i, j, meanAllElem, countAll) {
    i = i || 0;
    j = j || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayAllElem(matrix, ++i, j, meanAllElem, countAll);
        } else {
            meanAllElem += matrix[i][j];
            countAll++;
            return meanDimensionalArrayAllElem(matrix, i, ++j, meanAllElem, countAll);
        }
    } else {
        return meanAllElem / countAll;
    }
}

function meanDimensionalArrayEvenElem(matrix, i, j, meanEvenElem, countEven) {
    i = i || 0;
    j = j || 0;
    meanEvenElem = meanEvenElem || 0;
    countEven = countEven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayEvenElem(matrix, ++i, j, meanEvenElem, countEven);
        } else {
            if (matrix[i][j] % 2 == 0) {
                meanEvenElem += matrix[i][j];
                countEven++;
            }
            return meanDimensionalArrayEvenElem(matrix, i, ++j, meanEvenElem, countEven);
        }
    } else {
        return meanEvenElem / countEven;
    }
}

function meanDimensionalArrayUnevenElem(matrix, i, j, meanUnevenElem, countUneven) {
    i = i || 0;
    j = j || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayUnevenElem(matrix, ++i, j, meanUnevenElem, countUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                meanUnevenElem += matrix[i][j];
                countUneven++;
            }
            return meanDimensionalArrayUnevenElem(matrix, i, ++j, meanUnevenElem, countUneven);
        }
    } else {
        return meanUnevenElem / countUneven;
    }
}

//#15 Транспонировать матрицу

function transpositionMatrix(array, newDimensionalArray, i, j, k) {
    i = i || 0;
    j = j || 0;
    k = k || 0;
    newDimensionalArray = newDimensionalArray || [];

    if (newDimensionalArray.length == array.length) {
        if (i < array.length) {
            if (j == array.length) {
                j = 0;
                return transpositionMatrix(array, newDimensionalArray, ++i, j);
            } else {
                newDimensionalArray[j].push(array[i][j]);
                return transpositionMatrix(array, newDimensionalArray, i, ++j);
            }
        } else {
            return newDimensionalArray;
        }
    } else {
        if (i < array.length) {
            newDimensionalArray.push([]);
            return transpositionMatrix(array, newDimensionalArray, i, j, ++k);
        }
    }
}

//#16 Сложить две матрицы

function sumTwoMatrix(matrixFirst, matrixSecond, i, j) {
    i = i || 0;
    j = j || 0;

    if (i < matrixFirst.length) {
        if (j == matrixFirst.length) {
            j = 0;
            return sumTwoMatrix(matrixFirst, matrixSecond, ++i, j);
        } else {
            matrixFirst[i][j] += matrixSecond[i][j];
            return sumTwoMatrix(matrixFirst, matrixSecond, i, ++j);
        }
    } else {
        return matrixFirst;
    }
}
//#17 Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент.


function deleteLineWithZeroElement(matrix, i) {
    i = i || 0;

    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
        return deleteLineWithZeroElement(matrix, ++i);
    }

    return matrix;
}

function deleteColumnWithZeroElement(matrix, i) {
    i = i || 0

    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[j][i] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
        return deleteColumnWithZeroElement(matrix, ++i);
    }
    return matrix;
}
