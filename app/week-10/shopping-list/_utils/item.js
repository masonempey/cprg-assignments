function Item({ name, quantity, category, onSelect }) {
  return (
    <div>
      <li onClick={onSelect}>
        {name}, Quantity: {quantity}, Category: {category}
      </li>
    </div>
  );
}

export default Item;
