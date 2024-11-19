/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "./auth-context";
import { getItems, addItems } from "../_services/shopping-list-services.js";

export default function Page() {
  const { user } = useUserAuth();

  const loadItems = async () => {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    console.log("User not logged in");
    return null;
  }

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);

    setItems((prevItems) => [...prevItems, { id: itemId, data: newItem }]);
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
