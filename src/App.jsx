import React, { useState, lazy, Suspense } from 'react';
import ErrorMassage from './components/ErrorMessage';
import Categories from './components/Categories';
const ProductsList = lazy(() => import('./components/ProductsList'));
const Item = lazy(() => import('./components/Item'));
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [item, setItem] = useState(null);

  const onItemClick = (selectedItem) => {
    setItem(selectedItem);
  };
  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div className='container'>Loading...</div>}>
          <Categories
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <ProductsList
                    selectedCategory={selectedCategory}
                    onItemClick={setItem}
                  />
                </div>
              }
            />
            <Route
              path='/products/:id'
              element={<Item item={item} setItem={setItem} />}
            />
            <Route
              path='/category/:selectedCategory'
              element={
                <ProductsList
                  selectedCategory={selectedCategory}
                  onItemClick={setItem}
                />
              }
            />
            {/* Define a catch-all route for all 404 errors */}
            <Route path='*' element={<ErrorMassage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
