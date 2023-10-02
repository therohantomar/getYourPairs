import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import {useDispatch } from "react-redux"
import { toggleSidebar } from "../utility/sidebarSlice";



const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch=useDispatch()
  const name = searchParams.get("name");
  return (
    <div data-testid="sidebar" className=" w-40 absolute top-16 bottom-0 left-0   bg-white shadow-xl ">
      <span className="w-full mt-12 text-red-500 flex flex-col gap-4 font-titillium  ">
        <Link to="/">
          <span 
           onClick={()=>dispatch(toggleSidebar())}
            className={`flex  items-center  text-2xl p-2 ${
              !name ? "bg-red-500 text-white" : "text-red-500 bg-white"
            } hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <AiFillHome className="mx-4" />{" "}
            <h1 className="  cursor-pointer text-2xl">Home</h1>
          </span>
        </Link>
        <Link to="about?name=about">
          <span
          onClick={()=>dispatch(toggleSidebar())}
            className={`flex  items-center text-2xl p-2 ${
              name === "about"
                ? "bg-red-500 text-white"
                : "text-red-500 bg-white"
            } hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <AiFillInfoCircle className="mx-4" />
            <h1 className=" cursor-pointer  text-2xl">About</h1>
          </span>
        </Link>
        <Link to="contact?name=contact">
          <span
          onClick={()=>dispatch(toggleSidebar())}
            className={`flex  items-center  text-2xl p-2 ${
              name === "contact"
                ? "bg-red-500 text-white"
                : "text-red-500 bg-white"
            } hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <IoMdContacts className="mx-4" />
            <h1 className="  cursor-pointer text-2xl">Contact</h1>
          </span>
        </Link>
        <Link to="signin?name=signin">
          <span
          onClick={()=>dispatch(toggleSidebar())}
            className={`flex  items-center  text-2xl ${
              name === "signin"
                ? "bg-red-500 text-white"
                : "text-red-500 bg-white"
            } p-2 hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <AiOutlineUser className="mx-4" />
            <h1 className="  cursor-pointer text-2xl">signin</h1>
          </span>
        </Link>
        <Link to="cart?name=cart">
          <span
               onClick={()=>dispatch(toggleSidebar())}
            className={`flex  items-center  ${
              name === "cart"
                ? "bg-red-500 text-white"
                : "text-red-500 bg-white"
            } text-2xl p-2 hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <IoMdCart className="mx-4" />
            <h1 className="cursor-pointer text-2xl">cart</h1>
          </span>
        </Link>
      </span>
    </div>
  );
};

export default Sidebar;
