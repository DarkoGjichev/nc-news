import { Link } from "react-router-dom";
import "./articles.css";

function ArticleCard({ articles }) {
  return articles.map((article) => {
    const date = new Date(article.created_at);
    const formattedDate = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
      <article className="article_card" key={article.article_id}>
        <Link to={`/articles/${article.article_id}`}>
          <div className="image_container">
            <img
              className="image_container--image"
              src={article.article_img_url}
              alt=""
            />
            <ul className="image_container--list">
              <div className="image_container--reactions">
                <li className="image_container--listItem">
                  <i className="fa-solid fa-thumbs-up"></i> {article.votes}
                </li>
                <li className="image_container--listItem">
                  <i className="fa-solid fa-comment"></i>
                  {article.comment_count}
                </li>
              </div>
              <li className="image_container--listItem">{formattedDate}</li>
            </ul>
          </div>
          <h2 className="article_card--title">{article.title}</h2>
        </Link>
        <p className="article_card--info">
          <span>#{article.topic}</span> · <i className="fa-solid fa-user"></i>{" "}
          {article.author}
        </p>
      </article>
    );
  });
}

export default ArticleCard;
