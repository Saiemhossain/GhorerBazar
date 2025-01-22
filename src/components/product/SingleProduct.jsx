import { useNavigate, useParams } from "react-router"
import products from "../../data";
import { cartState } from "../../context/Context";


export default function SingleProduct() {
  const { cart, setCart } = cartState();
  const { id } = useParams();
  const navigate = useNavigate()

  const addToCart = () => {
    setCart([...cart, product])
    navigate('/checkout');
  }

  const product = products.find(item => item.id === parseInt(id));
  if (!product) {
    return <h2>No Product Found</h2>
  }
  return (
    <div className="single-product">
      <img src={product.image} />
       <h4> {product.des} </h4>
     <p> Taka :{product.price}</p> 
       <button className="cart-btn" onClick={addToCart}>Add To Cart </button>
    </div>
  )
}

