function fetchArticles(topic, sortBy, orderBy) {
  console.log("calling api");
  let path = `https://seeding-nc-news-3h3w.onrender.com/api/articles`;

  if (topic) {
    path += `?topic=${topic}&`;
  }
  path += `?sort_by=${sortBy}&order_by=${orderBy}`;
  console.log(path);
  return fetch(path)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchArticles;
