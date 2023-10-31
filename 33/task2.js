// У всіх подальних завданнях потрібно буде використовувати fetch та async/await та обробляти можливі помилки запиту.
// Будемо використовувати публічне API для доступу до бази данних по всесвіту Зоряних Війн - SWAPI - https://swapi.py4e.com
// Потрібно ознайомити з документацією даного API за посиланням - https://swapi.py4e.com/documentation
// Кореневе URL для доступу до API - https://swapi.py4e.com/api/ (розділ документації https://swapi.py4e.com/documentation#base )
// Список ресурсів які надає API - https://swapi.py4e.com/documentation#root
// Потрібно ознайомитись з ресурсами API так як в наступних завданнях потрібно буде їх використовувати
// Завдання Зробити запит до https://swapi.py4e.com/api/ і отримати список планет, вивести у консоль.
// Результат: вивести у консоль список планет у форматі: [{ name: 'Tatooine', rotation_period: '23', ... }, { name: 'Alderaan', rotation_period: '24', ... }, ... ]

// async function getPlanets() {
// write your code here
// }

getPlanets();

async function getPlanets() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/");

    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }

    const data = await response.json();
    console.log("Результат:");
    console.log(data.results);
  } catch (error) {
    console.log("Помилка запиту:", error);
  }
}

getPlanets();
