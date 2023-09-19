// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив 
// який містить лише стрічки початкового масиву

function filterArray(initialArray) {
    const stringArr = initialArray.filter((element)=>typeof element === 'string');
    return stringArr
}

console.log(filterArray([2,"string", 3,5 , null, "test"]))