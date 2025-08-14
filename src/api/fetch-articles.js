function fetchArticles(topic) {
  console.log(topic);
  let path = `https://seeding-nc-news-3h3w.onrender.com/api/articles`;
  if (topic) {
    path = path + `?topic=${topic}`;
  }
  return fetch(path)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchArticles;
