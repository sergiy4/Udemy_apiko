// Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI,
// ця функція повинна робити запити щоб отримати дані людини з вказаним ім'ям,
// після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
// Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів у форматі:
// {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}

async function fetchSWAPI(resource, throwError = false) {
  const rootUrl = "https://swapi.py4e.com/api/";

  // Перевіряємо, чи resource вже містить повну URL
  const url = resource.startsWith("http") ? resource : rootUrl + resource;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`${resource}  fetchSWAPI error`, error);

    if (throwError) {
      throw error;
    }
  }
}

async function getPersonFilms(name) {
  try {
    // Отримуємо інформацію про людину з вказаним ім'ям
    const peopleData = await fetchSWAPI(`people/?search=${name}`);

    if (peopleData.count === 0) {
      console.log(`${name} не знайдено`);
      return null;
    }

    // Отримуємо першу людину зі списку
    const person = peopleData.results[0];

    // Отримуємо деталі фільмів, у яких ця людина з'явилася
    const filmDetails = await Promise.all(
      person.films.map((filmUrl) => fetchSWAPI(filmUrl))
    );

    return {
      name: person.name,
      films: filmDetails,
    };
  } catch (error) {
    console.log(`${name} fetch error:`, error);
    return null;
  }
}

async function testGetPersonFilms() {
  const lukeFilms = await getPersonFilms("Luke");
  console.log("lukeFilms ", lukeFilms);

  const kenobiFilms = await getPersonFilms("Kenobi");
  console.log("kenobiFilms ", kenobiFilms);
}

testGetPersonFilms();
