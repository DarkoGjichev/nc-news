import { Link } from "react-router-dom";

function TopicLink({ topics }) {
  return topics.map((topic) => {
    return (
      <Link key={topic.slug} to={`/?topic=${topic.slug}`}>
        {topic.slug}
      </Link>
    );
  });
}
export default TopicLink;
