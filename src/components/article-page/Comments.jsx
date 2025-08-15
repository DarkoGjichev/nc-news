import { useState, useEffect } from "react";
import fetchComments from "../../api/fetch-comments";
import CommentCard from "./comments-component/CommentCard";
import CommentForm from "./comments-component/CommentForm";

function Comments({ article_id, comment_count }) {
  const [comments, setComments] = useState([]);
  const [commentInc, setCommentInc] = useState(0);
  const username = "grumpy19";

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);
  return (
    <>
      <section className="comments--wrapper">
        <CommentForm
          article_id={article_id}
          setComments={setComments}
          setCommentInc={setCommentInc}
          username={username}
        />
        <p>Total comments: {comment_count + commentInc}</p>
        <ul className="comments-container">
          <CommentCard
            comments={comments}
            setComments={setComments}
            setCommentInc={setCommentInc}
            username={username}
          />
        </ul>
      </section>
    </>
  );
}
export default Comments;
