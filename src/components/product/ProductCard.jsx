/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


export default function ProductCard({product}) {
  return (
    <div className="product-about">
      <img src={product.image} />
      <h2> {product.name} </h2>
      <Link to={`/product/${product.id}`}>
        {' '}
        <button> আরও দেখুন </button>{' '}
      </Link>
    </div>
  );
}
