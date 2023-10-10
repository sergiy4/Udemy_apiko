// Завдання 2
// Дано: Функція для генерації ID

// 1) Створити клас TodoItem із полями(властивостями):
// id(генерується у конструкторі за допомогою функції),
// name, checked(за замовчуванням false).
// Для поля checked написати гетер та сетер
// (добавити валідацію: поле може приймати лише булеве значення
//     true або false)

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

class TodoItem {
    id = generateId();

    constructor(name, checked) {
        this.name = name;
        this.checked = checked;
    }

    get checked() {
        return this._checked;
    }

    set checked(checked) {
        this._checked = typeof checked === "boolean" ? checked : false;
    }
}

const NewTodoItem = new TodoItem("Movie", false);

const NewTodoItem2 = new TodoItem("Movie2", false);
const NewTodoItem3 = new TodoItem("Movie3", true);
const NewTodoItem4 = new TodoItem("Movie4", false);
const NewTodoItem5 = new TodoItem("Movie5", true);
console.log(NewTodoItem);
console.log(NewTodoItem2);

// 2) Створити клас TodoList із полями:
// id(генерується у конструкторі за допомогою функції),
// name, items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id

class TodoList {
    id = generateId();

    constructor(name, items = []) {
        this.name = name;
        this.items = items;
    }

    addItem(item) {
        item.constructor.name === "TodoItem" ? this.items.push(item) : null;
    }
    removeItemById(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}

// 3) Створити екземпляр класу TodoList;

const List = new TodoList("My list");

// 4) Створити 4 екземпляри класу TodoItem,
// добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.

List.addItem(NewTodoItem);
List.addItem(NewTodoItem4);
List.addItem(NewTodoItem2);
List.addItem(NewTodoItem3);

console.log(List);

// 5) Поміняти значення checked у одного екземпляру TodoItem
// та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
NewTodoItem.checked = true;

console.log(List);

// 6) Видалити 2 екземпляри TodoItem із TodoList
// та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

List.removeItemById(NewTodoItem2.id);
List.removeItemById(NewTodoItem3.id);
