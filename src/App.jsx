import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
  );
}

export default App;
