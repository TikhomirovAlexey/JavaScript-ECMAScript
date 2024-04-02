'use strict';

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct = (product) => {
        this.products.push(product);
    }

    getTotalPrice = () => {
        let sum = 0;
        this.products.forEach(element => {
            sum += element.price;
        });
        return sum;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 550);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

const product3 = new Product("Mui", 700);
order.addProduct(product3);

console.log(order.getTotalPrice());