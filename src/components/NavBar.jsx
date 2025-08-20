import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
      {/* left - menu button and title */}

      <div className="flex items-center gap-5">
        <button
          className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          {openSideMenu ? (
            <X className="text-2xl" />
          ) : (
            <Menu className="text-2xl" />
          )}
        </button>

        <div className="flex items-center gap-1">
          <img src={assets.logo} alt="logo" className="h-15 w-15" />
          <span className="text-lg font-medium text-black truncate">
            BucksBee
          </span>
        </div>
      </div>

      {/* right - avatar */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className="flex items-center justify-center w-10 h-10 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
        >
          <User className="text-purple-500" />
        </button>

        {/* dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
            {/* user info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                  <User className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            </div>

            {/* dropdown options */}
            <div className="py-1"></div>
          </div>
        )}
      </div>

      {/* mobile side menu */}
    </div>
  );
};

export default NavBar;
