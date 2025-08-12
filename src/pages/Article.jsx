import { useState } from "react";
import ArticleBody from "../components/ArticleBody";
import { useParams } from "react-router";

function Article() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);
  return (
    <main>
      <ArticleBody
        article_id={article_id}
        singleArticle={singleArticle}
        setSingleArticle={setSingleArticle}
      ></ArticleBody>
    </main>
  );
}

export default Article;
