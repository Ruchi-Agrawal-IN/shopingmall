import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "./stores/CartSlice";
import { axios } from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
    // const getProducts = async() =>{
    //     const res = await axios.get('https://fakestoreapi.com/products').data;
    //    setProducts(res)

    // }
    // getProducts()
  }, []);
  const handleAddToCart = (product) => {
    console.log(`product is ${product}`);
    dispatch(addTocart(product));
  };
  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt="Product" />
            <h6>{product.title}</h6>
            <h5>$ {product.price}</h5>
            <button className="btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};

export default Product;
