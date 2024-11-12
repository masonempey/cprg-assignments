"use client";

import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div>
      <h2>New Item</h2>
      <p>Quantity: {quantity}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default NewItem;
