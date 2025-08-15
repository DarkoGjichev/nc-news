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
    <section className="votes--container">
      <p className="votes--total">Total votes: {votes + optimisticVotes}</p>
      <button className="votes--button" onClick={() => handleClick(-1)}>
        <i class="fa-solid fa-arrow-down"></i>
      </button>
      <button className="votes--button" onClick={() => handleClick(1)}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </section>
  );
}

export default Votes;
