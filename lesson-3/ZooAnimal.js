'use strict';

// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, 
// который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, 
// что вы используете приватные поля и статическое поле в соответствии с описанием.


class ZooAnimal {
    #name;
    #age;
    #gender;
    static MAX_AGE = 25;
    constructor(name, age, gender) {
        this.#name = name;
        this.#age = this.#ageVerification(age);
        this.#gender = gender;
    }

    changeName = (newName) => {
        this.#name = newName;
    }

    changeAge = (newAge) => {
        this.#age = this.#ageVerification(newAge);
    }

    #ageVerification = (age) => {
        if (age < ZooAnimal.MAX_AGE) return age;
        else console.log(`Максимальный допустимый возраст: ${ZooAnimal.MAX_AGE}.`);
    }
}

const animal1 = new ZooAnimal('Koko', '10', 'male');
console.log(animal1);
animal1.changeName('Lolo');
animal1.changeAge(17);
console.log(animal1);