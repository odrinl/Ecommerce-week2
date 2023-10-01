import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

Categories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

function Categories({ selectedCategory, onCategoryClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        const data = await response.json();
        data.unshift('all products');
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();
  }, []);

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            <h1>My shop</h1>
          </NavLink>
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
                    onClick={() => onCategoryClick(category)}
                    className={`nav-link p-2 nav-item btn btn-light ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                  >
                    <Link to={`category/${category}`}>{category}</Link>
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
