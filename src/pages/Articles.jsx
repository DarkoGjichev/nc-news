import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import Toolbar from "../components/articles-page/Toolbar";
import ArticleCard from "../components/articles-page/ArticleCard";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const [articles, setArticals] = useState([]);
  useEffect(() => {
    fetchArticles(topic).then(({ articles }) => {
      setArticals(articles);
    });
  }, [topic]);
  return (
    <main>
      <h1>{topic ? topic : "All articles"}</h1>
      <Toolbar articles={articles} setArticals={setArticals}></Toolbar>
      <section className="main-container">
        <ArticleCard articles={articles}></ArticleCard>
      </section>
    </main>
  );
}

export default Articles;
