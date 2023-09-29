import React from 'react'

const Filters = () => {
  return (
    <div className='w-40 h-[96vh] font-nunito  shadow-xl bg-white '>
    <span className='mx-4'>
        <h1 className='text-lg font-bold my-4'>Category</h1>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>All</label>
            <input type='radio' value={"all"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>heels</label>
            <input type='radio' value={"heels"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md  mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>sneakers</label>
            <input type='radio' value={"sneakers"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>sandals</label>
            <input type='radio' value={"sandals"} name='category'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>flats</label>
            <input type='radio' value={"flats"} name='category'  className=' radio radio-xs'/>

        </span>
    </span>

    <span className='mx-4'>
        <h1 className='text-lg my-4 font-bold'>Company</h1>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>All</label>
            <input type='radio' value={"all"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>Adidas</label>
            <input type='radio' value={"Addidas"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>Nike</label>
            <input type='radio' value={"Nike"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>Puma</label>
            <input type='radio' value={"Puma"} name='company'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>Vans</label>
            <input type='radio' value={"Vans"} name='company'  className=' radio radio-xs'/>

        </span>
    </span>

    <span className='mx-4'>
        <h1 className='text-lg my-4 font-bold'>Prices</h1>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>All</label>
            <input type='radio' value={"all"} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>&gt;10000</label>
            <input type='radio' value={"10000"} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold gap-2'>
            <label className='w-16 text-gray-500'>&lt;10000</label>
            <input type='radio' value={"<10000"} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label  className='w-16 text-gray-500'>&lt;5000</label>
            <input type='radio' value={"<5000"} name='prices'  className=' radio radio-xs'/>

        </span>
        <span className='flex text-md mx-2 items-center font-bold  gap-2'>
            <label className='w-16 text-gray-500'>&gt;5000</label>
            <input type='radio' value={">5000"} name='prices'  className=' radio radio-xs'/>

        </span>
    </span>
      
    </div>
  )
}

export default Filters
