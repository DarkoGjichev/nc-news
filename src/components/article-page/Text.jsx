function Text({ title, body, topic }) {
  return (
    <>
      <p className="article_text--tag"># {topic}</p>
      <h2 className="article_text--title">{title}</h2>
      <p className="article_text--body">{body}</p>
    </>
  );
}
export default Text;
