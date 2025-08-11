import Layout from "../layout/Layout";
import Toolbar from "../components/Toolbar";
import Gallery from "../components/Gallery";

function Articles() {
  return (
    <Layout>
      <main>
        <h1>All Articles</h1>
        <Toolbar></Toolbar>
        <Gallery></Gallery>
      </main>
    </Layout>
  );
}

export default Articles;
