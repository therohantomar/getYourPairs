import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Container = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen);
  return (
    <div >
      <Navbar />
      {isOpen ? <Sidebar /> : null}
      <Outlet />
    </div>
  );
};

export default Container;
