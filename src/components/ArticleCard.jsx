function ArticleCard({ articles }) {
  return articles.map((article) => {
    return (
      <article>
        <img src={article.article_img_url} alt="" />
        <h2>{article.title}</h2>
        <ul>
          <li>Created by: {article.author}</li>
          <li>Topic: {article.topic}</li>
          <li>Total Votes: {article.votes}</li>
          <li>Total Comments: {article.comment_count}</li>
        </ul>
      </article>
    );
  });
}

export default ArticleCard;
