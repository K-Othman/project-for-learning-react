import "./Product.css";
function Products(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt="the product" />
      <h1>{props.product.title}</h1>
      <p> {props.product.description} </p>
      <p> Price : £{props.product.price} </p>
    </div>
  );
}

export default Products;
