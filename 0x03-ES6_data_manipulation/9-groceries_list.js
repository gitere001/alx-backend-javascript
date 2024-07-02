/**
 * Generates a grocery list as a Map.
 *
 * @return {Map} The grocery list as a Map.
 */
export default function groceriesList() {
  const groceryList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceryMap = new Map(groceryList);
  return groceryMap;
}
