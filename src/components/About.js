import {useState} from 'react'
import AboutCompany from './AboutCompany'
import AboutProducts from './AboutProducts'

const About = () => {
  const [about,setAbout]=useState("company")
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 font-ubuntu">
          About GetYourPairs
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 border-2 p-2 font-nunito">
          GetYourPairs is an online shoe store that offers a wide range of shoes from top brands such as Nike, Adidas, Vans, and Puma. We are passionate about providing our customers with the latest footwear trends and ensuring they find the perfect pair of shoes to suit their style and needs.
        </p>
      </div>
      <div>
        <AboutCompany setAbout={setAbout} about={about}/>
        </div>
      
      <div>
      
        <AboutProducts setAbout={setAbout} about={about}/>
      </div>
    </div>

  )
}

export default About
