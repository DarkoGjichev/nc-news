import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article-id" element={<Article />} />
    </Routes>
  );
}

export default App;
