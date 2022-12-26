import productsData from "../Products-data";
import Products from "./Products";
import "./ProductList.css";

function ProductsList() {
  const prodcutList = productsData.map((product) => {
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
