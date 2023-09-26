import React, { useState } from 'react';
import Categories from './Categories';
import ProductsList from './ProductsList';

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Categories
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />
      <ProductsList selectedCategory={selectedCategory} />
    </div>
  );
}

export default Catalog;
