/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router';
import {cartState} from '../context/Context'

export default function CheckOut() {
  const { cart, setCart } = cartState();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Order submitted successfully...');
    setCart([]);
    navigate('/thankYou');

  }

  const handleRemove = (id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }

  const total = cart.reduce((item,total) => item +total.price ,0  )

  return (
    <>
      <div className='cart-page wrapper'>
        {cart.map(item => (
          <div key={item.id}>
            <img src={item.image} />
            <h4> {item.name} </h4>
            <p>{item.price}</p>
            <button onClick={()=> handleRemove(item.id)}> Remove</button>
          </div>
        ))}
      </div>
      <div className="amount wrapper">
        <h4>{total}</h4>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </>
  );

}




