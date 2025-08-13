import DeleteComment from "./DeleteComment";

function CommentCard({ comments, setComments, setCommentInc }) {
  console.log("Rendering CommentCard with comments:", comments);
  return comments.map((comment) => {
    return (
      <li className="comment-field" key={comment.comment_id}>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p>Timestamp: {comment.created_at}</p>
        <p>Total votes: {comment.votes}</p>
        <DeleteComment
          comment_id={comment.comment_id}
          setComments={setComments}
          setCommentInc={setCommentInc}
        />
      </li>
    );
  });
}

export default CommentCard;
