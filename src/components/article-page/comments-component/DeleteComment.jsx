function DeleteComment({ comment_id, setComments, setCommentInc }) {
  const handleDelete = (comment_id) => {
    fetch(
      `https://seeding-nc-news-3h3w.onrender.com/api/comments/${comment_id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        setComments((currentComments) =>
          currentComments.filter((comment) => comment.comment_id !== comment_id)
        );
        setCommentInc((prevCommentInc) => prevCommentInc - 1);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  return (
    <button
      className="delete-comment-button"
      onClick={() => handleDelete(comment_id)}
    >
      Delete Comment
    </button>
  );
}
export default DeleteComment;
