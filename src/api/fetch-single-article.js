function fetchSingleArticle(article_id) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles/${article_id}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchSingleArticle;
