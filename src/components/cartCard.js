import React from 'react'

const CartCard = ({img, title, quantity, newPrice,priceId }) => {
    console.log(priceId)
  return (
    <div className='flex w-full my-2 bg-white'>
      <img src={img} alt={title} className='w-40 h-20' />
      <span className='w-32 my-2 mx-2'>
        <h1>{title}</h1>
        <h2>{quantity}</h2>
        <h3>{newPrice}</h3>
        
      </span>
      <span className='flex flex-col gap-10'>
        <h2>₹{newPrice*quantity}</h2>
        <button className='btn btn-error'>clear</button>
      </span>
    </div>
  )
}

export default CartCard
