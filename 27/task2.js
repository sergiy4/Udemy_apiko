// Дано: обєкт Date та його методи
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Створити ф-ію clock, яка імітує поведінку годинника:
//  кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";

function showTime() {
    // Отримуємо поточний час
    const currentTime = new Date();

    // Отримуємо години, хвилини та секунди
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Додаємо нулі спереду, якщо число менше 10
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

setInterval(() => {
    showTime();
}, 1000);
