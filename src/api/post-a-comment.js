function postComment(article_id, username, commentText) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, body: commentText }),
    }
  ).then((response) => {
    return response.json();
  });
}
export default postComment;
