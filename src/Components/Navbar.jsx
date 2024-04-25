import { FiList, FiSearch } from "react-icons/fi";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <div onClick={() => setNav(!nav)} className="cursor-pointer text-white">
          <FiList size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white">
          Best <span className="font-bold text-orange-500">Food</span>
        </h1>
      </div>
      <div className="bg-gray-50 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <FiSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill /> Cart
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-zinc-900 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-white"
        />
        <h2 className="text-2xl p-4 text-white">
          Best <span className="font-bold text-orange-500">Food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4  text-white">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
