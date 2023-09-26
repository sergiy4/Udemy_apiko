// В функції showCarInfo вивести в консоль 
// name та model об'єкту car використовуючи контекст через this,
// викликати функцію showCarInfo використовуючи bind.

const car = {
    name : "Tesla",
    model : "X",
};

function showCarInfo() {
    // write code here
    console.log(this.name);
    console.log(this.model)
}

const bindShowCarInfo = showCarInfo.bind(car);
bindShowCarInfo()