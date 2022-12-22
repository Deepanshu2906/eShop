import { useContext } from "react";
import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/Cart/CartItem";
import "./Cart.css";
import { AppContext } from "../../Context";

function Cart() {
  const { cartItems } = useContext(AppContext);
  // console.log(cartItems);

  let totalPrice = cartItems.reduce((prev, curr) => {
    return Math.ceil(prev + curr.qty * curr.price);
  }, 0);

  console.log(totalPrice);

  return (
    <div className="cart-container">
      <Header />
      {/* 2. Print updated total price */}
      <h4 className="totalPrice">Total Price: {totalPrice}</h4>
      <h2 className="main-heading">
        In cart: {cartItems.length ? cartItems.length + " items" : "Empty"}
      </h2>
      <div className="allCartItems">
        {cartItems.map((item, index) => (
          <CartItem
            // 4. Pass function as props.
            key={index}
            item={item}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Cart;
