import React from 'react'
import { useDispatch } from 'react-redux'
import { categoryChanged, companyChanged, priceChanged } from '../utility/dataSlice'

const Filters = () => {
    const dispatch=useDispatch()
  return (
    <div className='w-40 h-[96vh] font-nunito  shadow-xl bg-white '>
    <span className='mx-4'>
        <h1 className='text-lg font-bold my-4'>Category</h1>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>All</label>
            <input type='radio' onChange={()=>dispatch(categoryChanged("all"))} value={"all"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>heels</label>
            <input type='radio' onChange={()=>dispatch(categoryChanged("heels"))} value={"heels"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md  mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>sneakers</label>
            <input type='radio' onChange={()=>dispatch(categoryChanged("sneakers"))} value={"sneakers"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>sandals</label>
            <input type='radio' onChange={()=>dispatch(categoryChanged("sandals"))} value={"sandals"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>flats</label>
            <input type='radio' onChange={()=>dispatch(categoryChanged("flats"))} value={"flats"} name='category'  className=' radio radio-xs'/>

        </span>
    </span>

    <span className='mx-4'>
        <h1 className='text-lg my-4 font-bold'>Company</h1>
        
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>Adidas</label>
            <input type='radio' onChange={()=>dispatch(companyChanged("Adidas"))} value={"Addidas"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>Nike</label>
            <input type='radio' onChange={()=>dispatch(companyChanged("Nike"))} value={"Nike"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>Puma</label>
            <input type='radio' onChange={()=>dispatch(companyChanged("Puma"))} value={"Puma"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>Vans</label>
            <input type='radio' onChange={()=>dispatch(companyChanged("Vans"))} value={"Vans"} name='company'  className=' radio radio-xs'/>

        </span>
    </span>

    <span className='mx-4'>
        <h1 className='text-lg my-4 font-bold'>Prices</h1>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>All</label>
            <input type='radio' onChange={()=>dispatch(priceChanged("all"))} value={"all"} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>&gt;10000</label>
            <input type='radio' value={"10000"} onChange={()=>dispatch(priceChanged(">10000"))} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>&lt;10000</label>
            <input type='radio' value={"<10000"} onChange={()=>dispatch(priceChanged("<10000"))} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>&lt;5000</label>
            <input type='radio' value={"<5000"} onChange={()=>dispatch(priceChanged("<5000"))} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>&gt;5000</label>
            <input type='radio' onChange={()=>dispatch(priceChanged(">5000"))} value={">5000"} name='prices'  className=' radio radio-xs'/>

        </span>
    </span>
      
    </div>
  )
}

export default Filters
