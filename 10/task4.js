// Дано: Функція яка приймає стрічку 
// яка містить мінімум 1 слово та пробіли. 
// Перший та останній символ не пробіли. 
// Слова можуть бути розділені не лише одним пробілом.
// Результат: Вивести у консоль кількість слів у стрічці.

function calculateWordsInString(str){

    const wordArr = str.split(/\s+/);
    console.log(wordArr.length)
    return wordArr.length
}
calculateWordsInString('sdf     sdf')