"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  //Used Chat GPT for sort method.
  const sortItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        style={{
          backgroundColor: sortBy === "name" ? "#4CAF50" : "#e0e0e0",
          color: sortBy === "name" ? "white" : "black",
        }}
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy === "category" ? "#4CAF50" : "#e0e0e0",
          color: sortBy === "category" ? "white" : "black",
        }}
      >
        Category
      </button>

      {sortItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default ItemList;
