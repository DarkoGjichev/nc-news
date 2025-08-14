import Order from "./toolbar-components/Order";
import SortBy from "./toolbar-components/SortBy";

function Toolbar({ setSortBy, setOrderBy }) {
  function handleClick(event) {
    event.preventDefault();
    const value = event.target.value;
    const formId = event.target.id;
    if (formId === "sort-by") {
      setSortBy(value);
    } else if (formId === "order") {
      setOrderBy(value);
    }
  }
  return (
    <section className="toolbar">
      <SortBy handleClick={handleClick} />
      <Order handleClick={handleClick} />
    </section>
  );
}

export default Toolbar;
