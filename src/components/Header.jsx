import { Link } from "react-router-dom";
import TopicLink from "./header-components/TopicLink";
import { useState, useEffect } from "react";
import fetchTopics from "../api/fetch-topics";

function Header() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>
        <TopicLink topics={topics} />
      </nav>
    </header>
  );
}

export default Header;
