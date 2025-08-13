import { useState } from "react";
import postComment from "../../../api/post-a-comment";

function CommentForm({ article_id, setComments, setCommentInc, username }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") return;

    postComment(article_id, username, commentText).then(({ postedComment }) => {
      setComments((prevComments) => [postedComment, ...prevComments]);
      setCommentInc((prevCommentInc) => prevCommentInc + 1);
      setCommentText("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
