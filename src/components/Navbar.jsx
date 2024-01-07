import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/product">
          Products
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className=" cartCount"> Cart Items: {cartItems.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
