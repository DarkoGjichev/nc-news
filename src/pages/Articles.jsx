import { useState } from "react";
import Layout from "../layout/Layout";
import Gallery from "../components/Gallery";
import Toolbar from "../components/Toolbar";

function Articles() {
  const [articles, setArticals] = useState([]);
  return (
    <Layout>
      <main>
        <h1>All Articles</h1>
        <Toolbar articles={articles} setArticals={setArticals}></Toolbar>
        <Gallery articles={articles} setArticals={setArticals}></Gallery>
      </main>
    </Layout>
  );
}

export default Articles;
