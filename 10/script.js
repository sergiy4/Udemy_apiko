// Дано: Функція яка приймає значення 
// яке може бути будь-яким типом даних = "302", null, 128, 60

// Результат: Вивести у консоль числа які є степенем двійки 
// та не більші заданого значення 
// або вивести помилку про коректний тип якщо значення не є числом

function printPowsOf2(number){

    if(typeof number === 'number'){

        for (let i = 1; i <= number; i *= 2) {
            console.log(i);
        }

        return;
    }

    throw new Error('incorrect type')
}

// printPowsOf2(64)

// мемонізована версія з закриттям

function memoPrintPowsOf2(){
    let cache = {}

    return function memo(number){

        if(cache[number]){
            console.log('cache')

            Object.values(cache).forEach(element => {
                // if the number is in the cache, use the cache
                console.log(element)
            });
            return;
        }
       

        for (let i = 1; i <= number; i *= 2) {
            
            if(!cache[i]){
                 // if it is not in the cache, add it
                cache[i] = i;
            }
           
        }
        // console.log(cache)
    }
}

const memoPows = memoPrintPowsOf2()

memoPows(32)
// memoPows(32)
memoPows(64)

// рекурсія

function recursionPrintPowsOf2(number, pow = 1){

    if(pow > number){
        return;
    }

    let currentPow = pow * 2;
    console.log(currentPow);

    recursionPrintPowsOf2(number,currentPow)
}

// recursionPrintPowsOf2(32)

// рекурсія з мемонізацією та закриттям

function hideCache(){
    cache = {}

    return function recursionPrintPowsOf2(number, pow = 1){

        // базовий випадок
        if(pow > number){
            return;
        }
        
        if(cache[pow]){
            // якщо є в кеші
            console.log('cache')
            console.log(cache[pow])
            recursionPrintPowsOf2(number,cache[pow] * 2);
            return;
        }

        cache[pow] = pow

        console.log(cache[pow])

        recursionPrintPowsOf2(number,cache[pow] * 2);
    }
}

const funcRec = hideCache();

// funcRec(32);
// funcRec(64);