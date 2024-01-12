"use client";

import { BiCameraMovie } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

import { CgProfile } from "react-icons/cg";
import CartButton from "../Modals/CartModal";


const Navbar = () => {
  
  
  return (
    <nav className="bg-nav text-white py-4 px-20 flex bg-[#101826] items-center justify-between ">
      <div className="flex flex-row  items-center">
        <button className=" pl-5 ">
          <BiCameraMovie className="w-6 h-6" style={{ color: "yellow" }} />
        </button>
        <p className="ml-3 pt-1 font-medium text-xl text-white-500">CineFlix</p>
      </div>

      <div className="flex flex-row items-center gap-5 pr-8">
        <button>
          <IoIosNotificationsOutline
            className="w-6 h-6 "
            style={{ color: "#71717a" }}
          />
        </button>
        <CartButton  />


      
        <button>
          <CgProfile className="w-6 h-6" style={{ color: "#71717a" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
