import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { useStripe } from "../utility/hooks/useStripe";

const Cart = () => {
  const Products = useSelector((store) => store.cart.Products);
  const handlePayment=useStripe(Products)
  return (
    <div>
      <span className="p-2 shadow flex flex-row gap-4">
      <span className="flex flex-col gap-4">
        <h1 className="font-ubuntu">total items-{Products.length}</h1>
        <h1 className="font-ubuntu text-green-600">
          total Price-
          {Products.reduce((acc, currentValue) => acc+ currentValue.newPrice * currentValue.quantity, 0)}/-
        </h1>
        </span>
        <button onClick={()=>handlePayment()} className="btn btn-error text-white">Checkout</button>
      </span>
      <span className="bg-gray-500">
        {Products.map(product=>{
          return (<CartCard key={product.id} {...product}/>)
        })}
      </span>
    </div>
  );
};

export default Cart;
