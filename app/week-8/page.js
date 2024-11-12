"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  //used CHAT gpt to help clean the name.
  const handleItemSelect = (item) => {
    const removeEmojis = (text) => {
      return text.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    };

    let cleanName = removeEmojis(item.name);
    const nameParts = cleanName.split(",");
    cleanName = nameParts[0].trim();

    setSelectedItemName(cleanName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
