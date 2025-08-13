import { useState, useEffect } from "react";
import { useParams } from "react-router";
import fetchSingleArticle from "../api/fetch-single-article";
import Comments from "../components/article-page/Comments";
import Votes from "../components/article-page/Votes";
import Tags from "../components/article-page/Tags";
import Text from "../components/article-page/Text";

function Article() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
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
      <Tags
        topic={singleArticle.topic}
        author={singleArticle.author}
        created_at={singleArticle.created_at}
      />
      <Text title={singleArticle.title} body={singleArticle.body} />
      <Votes votes={singleArticle.votes} article_id={article_id} />
      <Comments
        article_id={article_id}
        comment_count={singleArticle.comment_count}
      />
    </main>
  );
}

export default Article;
