import { useState, useEffect } from "react";
import fetchComments from "../../api/fetch-comments";
import Comment from "./comments-component/Comment";

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
        <p>Total comments: {comment_count}</p>
        <Comment comments={comments} />
      </ul>
    </>
  );
}
export default Comments;
