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
     {about==="product"?<span className="text-lg p-2 border-2 text-gray-700 mb-8 font-nunito">
     <p className="text-lg text-gray-700 mb-8 font-nunito">
    GetYourPairs offers a diverse range of shoes to cater to different preferences and occasions. Whether you're looking for athletic shoes for sports activities, casual sneakers for everyday wear, or stylish footwear for special events, we have you covered. Our collection includes a wide variety of styles, materials, and colors to suit every individual's taste and outfit. From performance-focused running shoes to trendy lifestyle sneakers, we curate our selection to provide options for everyone.
  </p>
  <p className="text-lg text-gray-700 mb-8 font-nunito">
    We partner with renowned brands such as Nike, Adidas, Vans, and Puma to bring you the latest designs and releases. Our team keeps a close eye on the ever-changing shoe industry to ensure that our inventory is up to date with the latest trends. Whether you're a sneakerhead looking for limited-edition collaborations or someone who values comfort and durability, our collection has something for you. We also offer a range of sizes to accommodate different foot shapes and provide a comfortable fit for everyone.
  </p>
  <p className="text-lg text-gray-700 mb-8 font-nunito">
    At GetYourPairs, we understand that the right pair of shoes can make a difference in your day-to-day activities or special occasions. That's why we strive to offer high-quality footwear that not only looks good but also performs well. Our products are made with premium materials and innovative technologies to provide optimal comfort, support, and functionality. We believe that everyone deserves to step out with confidence and style, and our goal is to help you find the perfect pair that suits your needs, preferences, and personality.
       </p> </span>:null} 
    </div>
  )
}

export default AboutProducts
