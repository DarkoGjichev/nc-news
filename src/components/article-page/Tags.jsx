function Tags({ author, created_at }) {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <p>
      <i className="fa-solid fa-user"></i> {author} · {formattedDate}
    </p>
  );
}
export default Tags;
