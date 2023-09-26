import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div>
      <div key={product.id}>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default Item;
