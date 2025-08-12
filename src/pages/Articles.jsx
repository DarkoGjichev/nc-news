import { useState } from "react";
import Gallery from "../components/Gallery";
import Toolbar from "../components/Toolbar";

function Articles() {
  const [articles, setArticals] = useState([]);
  return (
    <main>
      <h1>All Articles</h1>
      <Toolbar articles={articles} setArticals={setArticals}></Toolbar>
      <Gallery articles={articles} setArticals={setArticals}></Gallery>
    </main>
  );
}

export default Articles;
