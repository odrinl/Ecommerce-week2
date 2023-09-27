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
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <h1>My shop</h1>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='navbar-collapse collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav d-flex me-auto mb-2 mb-lg-0 align-items-center'>
              {categories.map((category, index) => (
                <li className='nav-item mx-2 m-2' key={index}>
                  <button
                    type='button'
                    onClick={() => handleCategoryClick(category)}
                    className={`nav-link p-2 nav-item btn btn-light ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                    href='#'
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
              <button className='btn btn-outline-secondary' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Categories;
