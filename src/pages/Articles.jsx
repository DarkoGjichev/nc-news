import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import Toolbar from "../components/articles-page/Toolbar";
import ArticleCard from "../components/articles-page/ArticleCard";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

function Articles() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const [articles, setArticals] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    fetchArticles(topic, sortBy, orderBy)
      .then(({ articles }) => {
        setArticals(articles);
      })
      .catch((error) => {
        setError(error);
      });
  }, [topic, sortBy, orderBy]);
  if (error) {
    return <ErrorPage />;
  }
  return (
    <main className="main-container">
      <h1>
        {topic ? `Everything about ${topic}` : "The whole world in one place"}
      </h1>
      <Toolbar
        articles={articles}
        setArticals={setArticals}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      ></Toolbar>
      <section className="gallery-container">
        <ArticleCard articles={articles}></ArticleCard>
      </section>
    </main>
  );
}

export default Articles;
