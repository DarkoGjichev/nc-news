import { useState, useEffect } from "react";
import fetchComments from "../../api/fetch-comments";
import CommentCard from "./comments-component/CommentCard";
import CommentForm from "./comments-component/CommentForm";
import useApiRequest from "../../useApiRequest";

function Comments({ article_id, comment_count }) {
  const [commentInc, setCommentInc] = useState(0);
  const username = "grumpy19";
  const {
    isLoading,
    error,
    data: { comments = [] },
    setData: setComments,
  } = useApiRequest(fetchComments, article_id);

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
        <ul className="comments--container">
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
