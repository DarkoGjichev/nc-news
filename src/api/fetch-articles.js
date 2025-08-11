function fetchArticles() {
  return fetch(`https://seeding-nc-news-3h3w.onrender.com/api/articles`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchArticles;
