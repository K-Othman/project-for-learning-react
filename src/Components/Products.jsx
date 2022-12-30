import { Link } from "react-router-dom";

function Products({ product, showButton }) {
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title"> {product.title} </h5>
          <p className="card-text"> {product.description} </p>
          <p> £{product.price} </p>
          {showButton && (
            <Link to={`product/${product.id}`} className="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
