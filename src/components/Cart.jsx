import { useDispatch, useSelector } from "react-redux";
import IncDecCounter from "./IncDecCounter";
import colors from "./config/colors";
import {
  removeFromCart,
  incrementItemCount,
  decrementItemCount,
} from "./stores/CartSlice";
const Cart = () => {
  let totalItemsCount = 0;
  let totalPrice = 0;
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCartfn = (product) => {
    dispatch(removeFromCart(product));
  };
  const increaseItemCount = (product) => {
    dispatch(incrementItemCount(product));
  };
  const decreaseItemCount = (product) => {
    decrementItemCount(product);
  };
  return (
    <div>
      <div className="cartWrapper">
        {items.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt="test" />
            <h5>{item.title}</h5>
            <h3> price: $ {item.price}</h3>
            <IncDecCounter></IncDecCounter>
            <button
              className="remove-btn"
              onClick={() => removeFromCartfn(item)}
            >
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: colors.secondary,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "10vh",
        }}
      >
        <span>Total Items: {totalItemsCount}</span>
        <span>Total price: {totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
