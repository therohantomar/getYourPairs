import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const Products = useSelector((store) => store.cart.Products);
  console.log(Products);
  return (
    <div>
      <span className="p-2 shadow flex flex-row gap-4">
      <span className="flex flex-col gap-4">
        <h1 className="font-ubuntu">total items-{Products.length}</h1>
        <h1 className="font-ubuntu">
          total Price-
          {Products.reduce((acc, currentValue) => acc+ currentValue.newPrice * currentValue.quantity, 0)}/-
        </h1>
        </span>
        <button className="btn btn-error text-white">Checkout</button>
      </span>
      <span>
        
      </span>
    </div>
  );
};

export default Cart;
