import React from 'react'
import { decrement, increment, removeFromcart } from '../utility/cartSlice'
import { useDispatch } from 'react-redux'

const CartCard = ({id,img, title, quantity, newPrice,priceId }) => {
  const dispatch=useDispatch()

  return (
    <div className='flex w-full shadow p-2 my-2 bg-white'>
      <img src={img} alt={title} className='w-40 h-20' />
      <span className='w-42 flex flex-col gap-2 my-2 mx-2'>
        <h1 className='w-40 font-ubuntu font-bold'>{title}</h1>
       <span className='flex'><button onClick={()=>dispatch(decrement(id))} className='  bg-red-500 px-2  text-white'>-</button> <h2 className='text-green-500 font-bold'>{quantity}</h2><button onClick={()=>dispatch(increment(id))} className='  bg-red-500 px-2  text-white'>+</button> </span>
        <h3 className='text-green-500 '>Price: {newPrice}/-</h3>
      </span>
      <span className='flex flex-col gap-10'>
        <h2>₹{newPrice*quantity}</h2>
        <button  onClick={()=>dispatch(removeFromcart({id}))} className='btn  text-white btn-error'>clear</button>
      </span>
    </div>
  )
}

export default CartCard
