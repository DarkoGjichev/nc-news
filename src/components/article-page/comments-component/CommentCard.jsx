import DeleteComment from "./DeleteComment";

function CommentCard({ comments, setComments, setCommentInc, username }) {
  return comments.map((comment) => {
    const date = new Date(comment.created_at);
    const formattedDate = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
      <li className="comment_card" key={comment.comment_id}>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p className="comment_card--time">{formattedDate}</p>
        {/* <p>Total votes: {comment.votes}</p> */}
        <DeleteComment
          author={comment.author}
          comment_id={comment.comment_id}
          setComments={setComments}
          setCommentInc={setCommentInc}
          username={username}
        />
      </li>
    );
  });
}

export default CommentCard;
