"use client";

import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 20 ? prevQuantity + 1 : prevQuantity
    );
  };

  const decrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <form onSubmit={handleSubmit}>
        <h2>New Item</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Meat">Frozen Foods</option>
            <option value="Dry Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Dry Goods">Beverages</option>
            <option value="Dry Goods">Snacks</option>
            <option value="Household">Household</option>
            <option value="Dry Goods">Other</option>
          </select>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </div>
  );
}

export default NewItem;
