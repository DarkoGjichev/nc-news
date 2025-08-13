import { useState } from "react";
import patchVotes from "../../api/patch-votes-on-article";

function Votes({ votes, article_id }) {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const handleClick = (increment) => {
    setOptimisticVotes((currVotes) => currVotes + increment);
    patchVotes(article_id, increment).catch(() => {
      setOptimisticVotes((currVotes) => currVotes - increment);
      alert("An error occurred while updating votes. Please try again.");
    });
  };
  return (
    <section className="votes-container">
      <button onClick={() => handleClick(-1)}>-1</button>
      <p>Total votes: {votes + optimisticVotes}</p>
      <button onClick={() => handleClick(1)}>+1</button>
    </section>
  );
}

export default Votes;
