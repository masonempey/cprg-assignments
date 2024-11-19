"use client";
import { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMealIdeas(ingredient) {
    if (!ingredient) {
      setMeals([]); // Reset meals if no ingredient is provided
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setMeals(data.meals); // Set meals if found
      } else {
        setMeals([]); // No meals found, reset meals
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]); // Reset meals if there's an error
    } finally {
      setLoading(false); // End loading state
    }
  }

  // Effect that runs whenever the ingredient changes
  useEffect(() => {
    setLoading(true); // Set loading to true when ingredient changes
    fetchMealIdeas(ingredient);
  }, [ingredient]); // Dependency array ensures it runs when ingredient changes

  return (
    <div>
      <h1>Meal Ideas with this ingredient: {ingredient}</h1>
      {loading && <p>Loading...</p>} {/* Display Loading state */}
      {meals.length === 0 && !loading ? ( // If no meals and not loading
        <p>No meals found for {ingredient}.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealIdeas;
