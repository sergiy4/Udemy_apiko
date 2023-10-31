const baseUrl = "https://jsonplaceholder.typicode.com";
const newUser = {
  name: "Name LastName",
  username: "UserName",
  email: "usermail@gmail.com",
};

// Створення POST-запиту з JSON-даними та вказанням заголовка Content-type
fetch(`${baseUrl}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error("Error");
    }
  })
  .then((data) => {
    console.log("Result:", data);
  })
  .catch((error) => {
    console.error(error);
  });
