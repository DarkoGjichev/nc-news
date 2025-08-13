function patchVotes(article_id, increment) {
  return fetch(
    `https://seeding-nc-news-3h3w.onrender.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: increment }),
    }
  ).then((response) => {
    response.json();
  });
}

export default patchVotes;
