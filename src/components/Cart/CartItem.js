import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import "./CartItem.css";

function CartItem(prop) {
  let [totalPrice, setPrice] = useState(prop.item.price);

  const { dispatcherEvents } = useContext(AppContext);

  // to update to price on each refresh
  useEffect(() => {
    let price = prop.item.qty * prop.item.price;
    setPrice(Math.ceil(price));
  }, [prop]);

  function handleQuantityChange(newQuantity) {
    console.log(newQuantity);
    prop.item.qty = newQuantity;
    // console.log(prop.item);
    dispatcherEvents("UPDATE_ITEM", prop.item);
  }

  function handleDelete(item) {
    dispatcherEvents("DELETE_ITEM", item);
  }

  return (
    <div className="cart-item">
      <div className="container-1">
        <div className="container">
          <img className="cart-img" src={prop.item.image}></img>
        </div>
        <div className="container">
          <h5>{prop.item.title}</h5>
        </div>
      </div>

      <div className="container-2">
        <div className="container">
          <h4>&#8377; {totalPrice}</h4>
        </div>

        <div className="quantity btn-group">
          <button
            className="btn btn-minus"
            onClick={() =>
              handleQuantityChange(prop.item.qty <= 1 ? 0 : prop.item.qty - 1)
            }
          >
            -
          </button>
          <button className="btn btn-primary">{prop.item.qty}</button>
          <button
            className="btn btn-plus"
            onClick={() => handleQuantityChange(prop.item.qty + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleDelete(prop.item)}
          className="btn btn-outline-danger deleteButton"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
