import { useState } from "react";
import AddCategory from "./components/AddCategory";
// import {AddCategory, GifGrid} from "./components";
// no funciona xd
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);

    if (
      categories
        .map((category) => category.toLowerCase())
        .includes(newCategory.toLowerCase())
    ) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {categories.map((category) => (
          <GifGrid 
          key={category}
          category={category}
          />
        ))}
    </>
  );
};

export default GifExpertApp;
