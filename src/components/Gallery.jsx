import { useEffect, useState } from "react";
import fetchArticles from "../api/fetch-articles";

function Gallery() {
  const [articles, setArticals] = useState([]);
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticals(articles);
    });
  }, []);

  return articles.map((article) => {
    return (
      <>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" />
      </>
    );
  });
}

export default Gallery;
