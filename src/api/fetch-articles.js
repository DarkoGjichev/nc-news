function fetchArticles(topic, sortBy, orderBy) {
  let path = `https://seeding-nc-news-3h3w.onrender.com/api/articles`;
  if (topic) {
    path += `?topic=${topic}&sort_by=${sortBy}&order=${orderBy}`;
  } else {
    path += `?sort_by=${sortBy}&order=${orderBy}`;
  }
  return fetch(path)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchArticles;
