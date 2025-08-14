function fetchSingleArticle(article_id) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles/${article_id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

export default fetchSingleArticle;
