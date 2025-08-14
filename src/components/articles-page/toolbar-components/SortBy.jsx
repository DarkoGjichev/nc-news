function SortBy({ handleClick }) {
  return (
    <>
      <label htmlFor="sort-by">Sort By:</label>
      <select
        onChange={(event) => handleClick(event)}
        name="sort-by"
        id="sort-by"
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </>
  );
}

export default SortBy;
