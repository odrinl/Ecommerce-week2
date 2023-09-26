import React, { useState, useEffect } from 'react';

function Categories({ selectedCategory, onCategoryClick }) {
  const [categories, setCategories] = useState([]);

  let apiUrl = 'https://fakestoreapi.com/products/categories';

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        data.unshift('all products');
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
  };

  return (
    <>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            My shop
          </a>

          <ul className='nav justify-content-center'>
            {categories.map((category, index) => (
              <li className='nav-item mx-2' key={index}>
                <button
                  type='button'
                  onClick={() => handleCategoryClick(category)}
                  className={`nav-link nav-item btn btn-light ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  href='#'
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Categories;
