import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
  );
}

export default App;
