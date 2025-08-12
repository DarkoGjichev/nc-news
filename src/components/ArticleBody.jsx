import { useEffect } from "react";
import fetchSingleArticle from "../api/fetch-single-article";

function ArticleBody({ singleArticle, setSingleArticle, article_id }) {
  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, []);

  return (
    <main className="article-container">
      <img
        className="image-wrapper"
        src={singleArticle.article_img_url}
        alt=""
      />
      <h1>{singleArticle.title}</h1>
      <p>{singleArticle.body}</p>
      <ul>
        <li>{singleArticle.topic}</li>
        <li>{singleArticle.author}</li>
        <li>{singleArticle.created_at}</li>
      </ul>
      <ul>
        <li>Total comments: {singleArticle.comment_count}</li>
        <li>Total votes: {singleArticle.votes}</li>
      </ul>
    </main>
  );
}

export default ArticleBody;
