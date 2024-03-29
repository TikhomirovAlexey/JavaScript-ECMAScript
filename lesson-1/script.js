'use strict';

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, 
// а не напрямую.

function createCounter() {
    return {
        count: 0,
        increment() {
            this.count++;
            return this.count;
        },
        decrement() {
            this.count--;
            return this.count;
        }
    }
}

const objCounter = createCounter();
console.log(objCounter.increment());
console.log(objCounter.decrement());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и 
// название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootEl, className) {
    if (rootEl.classList.contains(className)) return rootEl;
    if (rootEl.firstElementChild !== null) {
        return findElementByClass(rootEl.firstElementChild, className);
    }
    while (rootEl.parentElement.nextElementSibling === null) {
        rootEl = rootEl.parentElement;
        if (rootEl.parentElement === null) return null;
    }
    if (rootEl.parentElement.nextElementSibling !== null) {
        return findElementByClass(rootEl.parentElement.nextElementSibling, className);
    }
}

const rootElement = document.querySelector('html');

console.log(findElementByClass(rootElement, 'item'));