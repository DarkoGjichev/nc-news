import { useState, useEffect } from "react";
import fetchComments from "../../api/fetch-comments";
import CommentCard from "./comments-component/CommentCard";
import CommentForm from "./comments-component/CommentForm";

function Comments({ article_id, comment_count }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <ul className="comment-wrapper">
        <CommentForm article_id={article_id} setComments={setComments} />
        <p>Total comments: {comment_count}</p>
        <CommentCard comments={comments} />
      </ul>
    </>
  );
}
export default Comments;
