
import {AiFillHome} from "react-icons/ai"
import { AiFillInfoCircle } from "react-icons/ai"
import {IoMdContacts} from "react-icons/io"
const Sidebar = () => {
  return (
    <div className=" w-40 absolute top-16 bottom-0 left-0   bg-white shadow ">
      <span className="w-full mt-12 text-red-500 flex flex-col gap-4 font-titillium  ">
      
      <span className="flex gap-4 text-center text-2xl border-2 "> <AiFillHome/>  <h1 className="  cursor-pointer text-2xl">Home</h1>
       </span>
       <span className="flex gap-4 text-center text-2xl border-2"><AiFillInfoCircle/><h1 className=" cursor-pointer text-2xl">About</h1> 
       </span>
       <span className="flex gap-4 text-center text-2xl border-2"><IoMdContacts/><h1 className="  cursor-pointer text-2xl">Contact</h1>        
             </span>
      </span>

    </div>
  )
}

export default Sidebar
