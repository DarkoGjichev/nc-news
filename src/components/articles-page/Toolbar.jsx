import Filter from "./toolbar-components/Filter";
import SortBy from "./toolbar-components/SortBy";

function Toolbar({ setSortBy, setOrderBy }) {
  function handleClick(event) {
    event.preventDefault();
    const value = event.target.value;
    const formId = event.target.id;
    if (formId === "sort-by") {
      setSortBy(value);
    } else if (formId === "order-by") {
      setOrderBy(value);
    }
  }
  return (
    <>
      <label htmlFor="sort-by">Sort By</label>
      <select
        onChange={(event) => handleClick(event)}
        name="sort-by"
        id="sort-by"
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="order-by">Order By</label>
      <select
        onChange={(event) => handleClick(event)}
        name="order-by"
        id="order-by"
      >
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
      </select>
    </>
  );
}

export default Toolbar;
