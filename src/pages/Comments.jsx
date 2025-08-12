import { useState, useEffect } from "react";
import fetchComments from "../api/fetch-comments";
import Comment from "../components/Comment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <ul className="comment-wrapper">
        <h3>All Comments:</h3>
        <Comment comments={comments} />
      </ul>
    </>
  );
}
export default Comments;
