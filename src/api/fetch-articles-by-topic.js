function fetchArticlesByTopic(topic) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles?topic=${topic}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchArticlesByTopic;
