import { useDispatch } from "react-redux"
import { addToCart } from "../utility/cartSlice"


const Card = (product) => {
  const dispatch=useDispatch()


  return (
    <div     
     className="card" key={product.id}>
    <div className="card  w-[16em]   h-max bg-white shadow-xl cursor-pointer">
    <figure>
        <img src={product.img}  className="w-full p-4  hover:p-0  transition-all h-40" alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-10 break-words font-titillium font-thin">{product.title}</h2>
        <h3 className="badge badge-info text-white">{product.company}</h3>
        <h4 className="text-gray-700 font-bold uppercase">{product.category}</h4>
        <span className="flex ">
        <p className="text-red-500 line-through">₹ {product.prevPrice}</p>
        <p className="text-green-500 ">₹ {product.newPrice}</p>

        </span>
                <div className="card-actions justify-end">
          <button onClick={()=>dispatch(addToCart(product))} className="btn btn-error text-white my-4">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
