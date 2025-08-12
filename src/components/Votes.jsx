function Votes({ votes }) {
  return (
    <>
      <div>
        <i class="fa-solid fa-thumbs-up"></i>
        <i class="fa-solid fa-thumbs-down"></i>
      </div>
      <p>Total votes: {votes}</p>
    </>
  );
}

export default Votes;
