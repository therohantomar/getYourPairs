import React from 'react'
import {BsArrowDownCircleFill,BsArrowUpCircleFill} from "react-icons/bs"
const AboutCompany = ({about,setAbout}) => {
    
   console.log()
  return (
    <div>
      <span className='border-b-2 pb-2 flex items-center justify-between w-full'>
        <h2 className="text-2xl font-bold text-blue-600 mb-4 font-ubuntu">
          Our Website
        </h2>
        {about==="company"?<BsArrowUpCircleFill className='text-blue-500 cursor-pointer' onClick={()=>setAbout("product")}/>:<BsArrowDownCircleFill className='text-blue-500 cursor-pointer' onClick={()=>setAbout("company")}/>}
        </span>
        {about==="company"?<p className="text-lg p-2 border-2 text-gray-700 mb-8 font-nunito">
          At GetYourPairs, we have designed our website to provide a seamless and enjoyable shopping experience. Our user-friendly interface allows you to browse through our extensive collection of shoes, filter by brand, size, and style, and easily make a purchase with just a few clicks. We strive to make your online shopping experience convenient, secure, and reliable.
        </p>:null}
        
      </div>
  )
}

export default AboutCompany
