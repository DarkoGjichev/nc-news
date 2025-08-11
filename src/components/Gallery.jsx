import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";
import ArticleCard from "./ArticleCard";

function Gallery({ articles, setArticals }) {
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticals(articles);
    });
  }, []);

  return <ArticleCard articles={articles}></ArticleCard>;
}

export default Gallery;
