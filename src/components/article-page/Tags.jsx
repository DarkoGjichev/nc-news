function Tags({ topic, author, created_at }) {
  return (
    <>
      <ul>
        <li># {topic}</li>
        <li>Created by: {author}</li>
        <li>{created_at}</li>
      </ul>
    </>
  );
}
export default Tags;
