function Item({ name, quantity, category }) {
  return (
    <div>
      <li>{name}</li>
      <li>{quantity}</li>
      <li>{category}</li>
    </div>
  );
}

export default Item;
