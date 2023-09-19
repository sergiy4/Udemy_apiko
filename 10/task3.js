// Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

// Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(monthName){
    
    const lowerMonthName = monthName.toLowerCase();

    const seasonMap = {
        january: 'winter',
        february: 'winter',
        march: 'spring',
        april: 'spring',
        may: 'spring',
        june: 'summer',
        july: 'summer',
        august: 'summer',
        september: 'autumn',
        october: 'autumn',
        november: 'autumn',
        december: 'winter',
    };

    const season = seasonMap[lowerMonthName];

    if (season) {
        console.log(season);
    } else {
        console.log(`Invalid month name: ${monthName}`);
    }
}