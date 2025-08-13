function CommentCard({ comments }) {
  console.log("Rendering CommentCard with comments:", comments);
  return comments.map((comment) => {
    return (
      <li className="comment-field" key={comment.comment_id}>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p>Timestamp: {comment.created_at}</p>
        <p>Total votes: {comment.votes}</p>
      </li>
    );
  });
}

export default CommentCard;
