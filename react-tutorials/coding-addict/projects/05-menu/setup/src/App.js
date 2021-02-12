import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// set up function where I only get back unique items from category property of the list of items
// const allCategories = items.map((item) => item.category);

// since from allCategories we get back all categories, including repetitive values (ie. 2x breakfast, 2x shakes etc.), we just want to display the first one if them, we use new Set()
// const allCategories = new Set(items.map((item) => item.category));

// however we are missing an item that refers to all categories, which is part of list of items, we can simply add it into the array and spread our original array
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // function that filters category when clicking the respective button
  // function will be looking for a string, we call it "category" for now and pass it in ()
  // inside of function iterate over original list "items"
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
