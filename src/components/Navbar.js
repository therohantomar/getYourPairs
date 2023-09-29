import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSearch } from "react-icons/md";
import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utility/sidebarSlice";
import logo from "../logo.png"

const Navbar = () => {
  const dispatch=useDispatch()
  return (
    <div className="w-full bg-white shadow sticky top-0 left-0 right-0 z-10  flex justify-between navbar items-center ">
      <div className="w-max  mx-4 flex items-center">
        <GiHamburgerMenu onClick={()=>dispatch(toggleSidebar())} className="mx-4 text-red-500 cursor-pointer xs:block sm:block md:block lg:hidden xl:hidden 2xl:hidden  text-xl " />
        <img src={logo} alt="logo"  className="w-16 h-10"/>
      </div>
      <span className="flex border-2 w-1/3 border-red-500 rounded-lg items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-2  border w-full border-none rounded-md text-xl font-ubuntu outline-none "
          />
          <MdSearch className="text-xl h-max w-max p-1  rounded-full  cursor-pointer  text-red-500" />
        </span>
      <span className="flex w-max mx-8 gap-10">
       
        <ul className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  items-center">
          <Link to="/">
            <li className="mx-4 avatar  text-xl text-red-500">Home</li>
          </Link>
          <Link to="about">
            <li className="mx-4 avatar  text-xl text-red-500">About</li>
          </Link>
          <Link to="contact">
            <li className="mx-4 avatar  text-xl text-red-500">Contact</li>
          </Link>
          <Link to="signin">
            <li className="mx-4 avatar  text-xl text-red-500">
              <BiSolidUser />
            </li>
          </Link>
          <Link to="cart">
            <li className=" max-4 text-red-500 text-xl ">
              <BiSolidCart />
            </li>
          </Link>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
