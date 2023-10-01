import React from 'react'
import { BsArrowUpCircleFill,BsArrowDownCircleFill } from 'react-icons/bs'
const AboutProducts = ({about,setAbout}) => {
  return (
    <div>
    <span className='pb-2 border-b-2 w-full flex items-center justify-between'>
        <h2 className="text-2xl font-bold text-blue-600 mb-4 font-ubuntu">
          Our Products
        </h2>
        {about==="product"?<BsArrowUpCircleFill className='text-blue-500 cursor-pointer' onClick={()=>setAbout("company")}/>:<BsArrowDownCircleFill className='text-blue-500 cursor-pointer' onClick={()=>setAbout("product")}/>}

        </span>

     {about==="product"?<p className="text-lg p-2 border-2 text-gray-700 mb-8 font-nunito">
          GetYourPairs offers a diverse range of shoes to cater to different preferences and occasions. Whether you're looking for athletic shoes for sports activities, casual sneakers for everyday wear, or stylish footwear for special events, we have you covered. Our collection includes the latest designs and releases from Nike, Adidas, Vans, and Puma, ensuring that you stay up to date with the latest trends in the shoe industry.
        </p>:null} 
    </div>
  )
}

export default AboutProducts
