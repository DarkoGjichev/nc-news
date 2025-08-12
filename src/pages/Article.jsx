import { useState, useEffect } from "react";
import { useParams } from "react-router";
import fetchSingleArticle from "../api/fetch-single-article";
import ArticleBody from "../components/ArticleBody";
import Comments from "./Comments";

function Article() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, []);

  return (
    <main>
      <ArticleBody
        article_id={article_id}
        singleArticle={singleArticle}
        setSingleArticle={setSingleArticle}
      ></ArticleBody>
      <Comments article_id={article_id} />
    </main>
  );
}

export default Article;
