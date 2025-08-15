import { useState, useEffect } from "react";
import { useParams } from "react-router";
import fetchSingleArticle from "../api/fetch-single-article";
import Comments from "../components/article-page/Comments";
import Votes from "../components/article-page/Votes";
import Tags from "../components/article-page/Tags";
import Text from "../components/article-page/Text";
import ErrorPage from "../pages/ErrorPage";
import "../components/article-page/article.css";

function Article() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchSingleArticle(article_id)
      .then(({ article }) => {
        setSingleArticle(article);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) {
    return <ErrorPage />;
  }

  return (
    <main className="article-container">
      <img
        className="article-image"
        src={singleArticle.article_img_url}
        alt=""
      />
      <Tags
        author={singleArticle.author}
        created_at={singleArticle.created_at}
      />
      <Text
        topic={singleArticle.topic}
        title={singleArticle.title}
        body={singleArticle.body}
      />
      <Votes votes={singleArticle.votes} article_id={article_id} />
      <Comments
        article_id={article_id}
        comment_count={singleArticle.comment_count}
      />
    </main>
  );
}

export default Article;
