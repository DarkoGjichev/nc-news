import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import Toolbar from "../components/articles-page/Toolbar";
import ArticleCard from "../components/articles-page/ArticleCard";

function Articles() {
  const [articles, setArticals] = useState([]);
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticals(articles);
    });
  }, []);
  return (
    <main>
      <h1>All Articles</h1>
      <Toolbar articles={articles} setArticals={setArticals}></Toolbar>
      <section className="main-container">
        <ArticleCard articles={articles}></ArticleCard>
      </section>
    </main>
  );
}

export default Articles;
