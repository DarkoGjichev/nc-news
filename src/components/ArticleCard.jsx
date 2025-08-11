function ArticleCard({ articles }) {
  return articles.map((article) => {
    return (
      <article className="article-card" key={article.article_id}>
        <img className="image-wrapper" src={article.article_img_url} alt="" />
        <h2>{article.title}</h2>
        <ul>
          <li>Created by: {article.author}</li>
          <li>Topic: {article.topic}</li>
          <li>Total Votes: {article.votes}</li>
          <li>Total Comments: {article.comment_count}</li>
          <li>{article.created_at}</li>
        </ul>
      </article>
    );
  });
}

export default ArticleCard;
