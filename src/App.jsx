import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
