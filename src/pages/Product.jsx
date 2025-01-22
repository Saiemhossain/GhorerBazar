import ProductCard from "../components/product/ProductCard";
import products from "../data";



export default function Product() {
  return (
    <div className="product-area wrapper">
      <h2>আমাদের সকল পণ্য</h2>
      <div className="product-content">
        {
         products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
}
