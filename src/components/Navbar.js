import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utility/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import logo from "../logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import usegeoaddress from "usegeoaddress"


const Navbar = () => {
  const Products=useSelector(store=>store.cart.Products)
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const {address} =usegeoaddress()


  return (
    <div className="w-full bg-white shadow sticky top-0 left-0 right-0 z-10  flex justify-between navbar items-center ">
      <div className="w-full  mx-4 flex justify-between items-center">
        <GiHamburgerMenu
          data-testid="menu"
          onClick={() => dispatch(toggleSidebar())}
          className="mx-4 text-red-500 cursor-pointer xs:block sm:block md:block lg:hidden xl:hidden 2xl:hidden  text-xl "
        />
        <span>
        <img src={logo} data-testid="logo" alt="logo" className="w-16 h-10" />
     <h1 className="text-red-500 font-thin">{address?.city}</h1>
     </span>
      </div>
      <span className="flex font-bold w-max mx-8 gap-10">
        <ul
          data-testid="nav_links"
          className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  items-center"
        >
          <Link to="/">
            <li
              className={`mx-4 avatar  text-xl ${
                !name ? "text-gray-500" : "text-red-500"
              } `}
            >
              Home
            </li>
          </Link>
          <Link to="about?name=about">
            <li
              className={`mx-4 avatar  text-xl ${
                name === "about" ? "text-gray-500" : "text-red-500"
              } `}
            >
              About
            </li>
          </Link>
          <Link to="contact?name=contact">
            <li
              className={`mx-4 avatar  text-xl ${
                name === "contact" ? "text-gray-500" : "text-red-500"
              } `}
            >
              Contact
            </li>
          </Link>
          <Link to="signin?name=signin">
            {isAuthenticated ? (
              <li className="w-8 h-8">
                <img
                  src={user?.picture}
                  className="rounded-full"
                  alt={user?.email}
                />
              </li>
            ) : (
              <li className="mx-4 avatar  text-xl text-red-500">
                <BiSolidUser />
              </li>
            )}
          </Link>
          <Link to="cart?name=cart">
            <li className="relative mx-4 text-red-500 text-xl ">
              <BiSolidCart />
              {Products.length!==0?<span class="absolute top-0 left-4 flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>:null}
              
            </li>
          </Link>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
