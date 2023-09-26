// Завдання 6
// Дано: написати функцію logPersonNameAndInterests 
// яка прийматиме довільну кількість аргументів стрічок 
// та виводитиме в консоль повне ім'я Person 
// використовуючи виклик getFullName з контекстом Person,
// а також перелік усіх його інтересів які приходять аргументами цієї функції
// Результат: виклик logPersonNameAndInterests з контекстом Person 
// та переліком інтересів ['sushi', 'hiking'] -> в консолі 'John Doe loves: sushi, hiking'

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};
    
const testArgs = ['sushi', 'hiking']
   
let logPersonNameAndInterests = (arr)=>{
    var a = 2
    const fullName = Person.getFullName()

    console.log(`${fullName} loves: ${arr.join(', ')}`)
} // your code here

logPersonNameAndInterests(testArgs)

