function Tags({ topic, author, created_at }) {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <ul>
        <li># {topic}</li>
        <li>Created by: {author}</li>
        <li>{formattedDate}</li>
      </ul>
    </>
  );
}
export default Tags;
