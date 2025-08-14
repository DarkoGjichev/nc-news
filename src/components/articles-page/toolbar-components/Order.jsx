function Order({ handleClick }) {
  return (
    <>
      <label htmlFor="order">Order:</label>
      <select onChange={(event) => handleClick(event)} name="order" id="order">
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
      </select>
    </>
  );
}

export default Order;
