// Завдання 1
// Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
// Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат

// Global Scope
let a = 1;
const b = 2;
var c = 3;

function func(){
    console.log(a)
    console.log(b)
    console.log(c)
}

func();

// Function Scope:


function scope(){
    // Function Scope:
    let insideFunction = 1;
    const insideFunction2 = 2;
    var insideFunction3 = 3;
}

try{
    console.log(insideFunction1)//not defined
    console.log(insideFunction2)//not defined
    console.log(insideFunction3)//not defined
} catch (err){
    console.log(err)
}




function scope(){

    {
        // Block Scope :
        let insideBlock = 1;
        const insideBlock2 = 2;
        var insideBlock3 = 3;
    }

    try{
        console.log(insideBlock3)// 3
        console.log(insideBlock)//not defined
        console.log(insideBlock2)//not defined
       
    } catch(err){
        console.log(err)
    }
   


}

scope()
