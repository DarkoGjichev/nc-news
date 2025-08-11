import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import ArticleCard from "./ArticleCard";

function Gallery({ articles, setArticals }) {
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticals(articles);
    });
  }, []);

  return (
    <section className="main-container">
      <ArticleCard articles={articles}></ArticleCard>
    </section>
  );
}

export default Gallery;
