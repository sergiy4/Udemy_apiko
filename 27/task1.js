// Створити ф-ію isString, яка першим параметром отримує функцію колбек
// та другим значення. Перевіряє чи передане значення це стрічка і
// колбек це функція та виконує колбек із цим значенням
// або виводить помилку в консоль якщо це не стрічка або колбек не є функцієюz

function isString(callback, val) {
    if (typeof val !== "string") {
        console.log("Error: val is not a string");
        return;
    } else if (typeof callback !== "function") {
        console.log("Error: callback is not a function");
        return;
    }

    callback(val);
}

function callback(val) {
    console.log(val);
}

isString("sd", "12"); //Error: callback is not a function
isString(callback, 23); //Error: val is not a string
isString(callback, "str"); //str
