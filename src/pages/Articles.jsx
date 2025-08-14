import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import Toolbar from "../components/articles-page/Toolbar";
import ArticleCard from "../components/articles-page/ArticleCard";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const [articles, setArticals] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  console.log(articles, "in articles");
  useEffect(() => {
    fetchArticles(topic, sortBy, orderBy).then(({ articles }) => {
      setArticals(articles);
    });
  }, [topic, sortBy, orderBy]);

  return (
    <main className="main-container">
      <h1>{topic ? topic : "All articles"}</h1>
      <Toolbar
        articles={articles}
        setArticals={setArticals}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      ></Toolbar>
      <section>
        <ArticleCard articles={articles}></ArticleCard>
      </section>
    </main>
  );
}

export default Articles;
