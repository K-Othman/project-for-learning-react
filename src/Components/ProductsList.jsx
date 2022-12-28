import Products from "./Products";
import "./ProductList.css";
import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const prodcutList = products.map((product) => {
    return product.price > 100 ? (
      <Products key={product.id} product={product} />
    ) : null;
  });
  return (
    <div className="products-list">
      <div className="row">{prodcutList}</div>
    </div>
  );
}
export default ProductsList;
