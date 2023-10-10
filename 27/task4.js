// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через
//  5с занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу
// яка буде зупиняти(скасовувати) це занулювання

class Person {
    constructor(name) {
        this.name = name;

        this.nullifyTimer = setTimeout(() => {
            this.name = null;
        }, 5000);
    }

    cancelNullify() {
        clearTimeout(this.nullifyTimer);
    }
}

const obj = new Person("segiy");

console.log(obj);

obj.cancelNullify();

setTimeout(() => {
    console.log(obj);
}, 6000);
