// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

// Результат: Вивести у консоль суму чисел у масиві.

function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    

    const sum = initialArray.reduce((previousValue,currentValue )=>{
        if(typeof currentValue === 'number') return previousValue + currentValue
        return previousValue;

    },0)
    console.log(sum)
}
calculateSumOfArray();

