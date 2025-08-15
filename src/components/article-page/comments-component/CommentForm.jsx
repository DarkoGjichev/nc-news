import { useState } from "react";
import postComment from "../../../api/post-a-comment";

function CommentForm({ article_id, setComments, setCommentInc, username }) {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      setError("Your comment must contain at least 1 character");
      return;
    }

    postComment(article_id, username, commentText).then(({ postedComment }) => {
      setComments((prevComments) => [postedComment, ...prevComments]);
      setCommentInc((prevCommentInc) => prevCommentInc + 1);
      setCommentText("");
    });
  };

  return (
    <form className="comment_form--form" onSubmit={handleSubmit}>
      <textarea
        className={
          error
            ? "comment_form--textarea comment_form--error"
            : "comment_form--textarea"
        }
        value={commentText}
        onChange={(event) => {
          setCommentText(event.target.value);
          setError("");
        }}
        placeholder={error ? error : "Add a comment..."}
      />
      <button className="comment_form--button" type="submit">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default CommentForm;
