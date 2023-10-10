// Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера:
// кожну секунду виводить в консоль стрічку Timer: ${s},
//  де ${s} - кількість секунд що залишилось

function timer(s) {
    const timer = setInterval(() => {
        console.log(`Timer ${s}`);
        s--;
        if (s === 0) clearInterval(timer);
    }, 1000);
}

timer(10);
