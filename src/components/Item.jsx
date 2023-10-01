import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

Item.propTypes = {
  item: PropTypes.any.isRequired,
  setItem: PropTypes.func.isRequired,
};

function Item({ item, setItem }) {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const apiUrl = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItem(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);

        setIsLoading(false);
      }
    })();
  }, [id, setItem]);

  return (
    <>
      {isLoading ? ( // Conditional rendering based on isLoading state
        <div className='container display-5 m-5 p-5'>
          <p>Loading product...</p>
        </div>
      ) : (
        <div className='container justify-content-center'>
          <button
            className='btn btn-outline-secondary mt-3'
            onClick={() => navigate(-1)}
          >
            &lt;&lt; &nbsp;Go Back
          </button>
          <div className='card m-3'>
            <div className='row g-0 p-3'>
              <div className='col-md-4 d-flex align-items-center'>
                <img
                  src={item.image}
                  className='card-img-top'
                  alt={item.title}
                  style={{ maxWidth: '540px' }}
                />
              </div>
              <div className='col-md-8 d-flex align-items-center'>
                <div className='card-body pl-5'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.description}</p>
                  <p className='card-text'>{`$${item.price}`}</p>
                  <div className='card-footer'>
                    <small className='text-body-secondary'>{`Rating: ${item.rating.rate} from ${item.rating.count}`}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Item;
