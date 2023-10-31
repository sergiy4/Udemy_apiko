// Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
// const baseUrl = "https://jsonplaceholder.typicode.com";
// Будемо використовувати ресурс /users щоб отримати дані користувачів
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів

// const baseUrl = "https://jsonplaceholder.typicode.com/users";

const baseUrl = "https://jsonplaceholder.typicode.com";

async function getUsers() {
    try {
        const response = await fetch(`${baseUrl}/users`);
        const users = await response.json();
        return users;
    } catch (err) {
        console.log(err);
    }
}

getUsers()
    .then((users) => {
        console.log("Result: ", users);
    })
    .catch((err) => {
        console.error("Error fetching users:", err.message);
    });
