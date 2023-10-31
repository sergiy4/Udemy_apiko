// Отримати список вказаних альбомів, вказуючи їхні id.
// Для цього потрібно використати ресурс /albums.
// Щоб отримати альбом з id - 5, можна використати ендпоінт /albums/5
// Але дане API не надає можливості вказати декілька id альбомів щоб отримати ці альбоми в одному запиті
// Тому потрібно робити декілька запитів якщо хочемо отримати декілька альбомів
// Написати функцію getAlbum(id), яка буде приймати id альбому який потрібно отримати.
// функція getAlbum повинна повертати проміс, який у разі успішного виконання повертає дані альбому
// Написати функцію getSpecifiedAlbums(ids = []),
//  яка буде приймати масив ids з значеннями id для альбомів які потрібно отримати функція getSpecifiedAlbums()
// повинна повертати проміс, який у разі успішного виконання повертає масив вказаних альбомів
// Щоб getSpecifiedAlbums виконувалась швидше, усі запити на отримання певного альбому повинні виконуватись паралельно
// У разі успішного виконання промісу з getSpecifiedAlbums, вивести у консоль результат.

async function getAlbum(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Error");
  }
}

function getSpecifiedAlbums(ids = []) {
  const promises = ids.map((id) => getAlbum(id));

  return Promise.all(promises);
}

getSpecifiedAlbums([1, 15])
  .then((results) => {
    console.log("Results: ", results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
