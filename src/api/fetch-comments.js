function fetchComments(article_id) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles/${article_id}/comments`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
}

export default fetchComments;
