import React, { useState } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaBars, FaRegBell, FaSearch } from "react-icons/fa";
import Search from "../../utility/Search";
import Notification from "../../utility/Notification";
import { useClickOutside } from "../../../hooks/useClickOutside";
import NavMenu from "./NavMenu";
import ProfileSettings from "./ProfileSettings";
import ReusableButton from "../../common/ReusableButton";
import { motion } from "framer-motion";
import { PiGridFourBold } from "react-icons/pi";
import AnimatedFadeSlide from "../../utility/AnimatedFadeSlide";

const Navbar: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onNotificationClose = () => {
    setOpenNotification(false);
  };

  const onSearchClose = () => {
    setOpenSearch(false);
  };

  const onSettingsClose = () => {
    setOpenSettings(false);
  };

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const notificationRef = useClickOutside<HTMLDivElement>(onNotificationClose);
  const searchRef = useClickOutside<HTMLDivElement>(onSearchClose);
  const settingRef = useClickOutside<HTMLDivElement>(onSettingsClose);

  return (
    <nav className="shadow-md fixed top-0 left-0 right-0 bg-white h-18 z-10">
      <div className="flex items-center h-full">
        <div className="h-full flex items-center justify-center px-5">
          <PiGridFourBold size={30} className="text-white bg-sky-600 p-1" />
        </div>
        <div className="flex flex-auto justify-between items-center gap-5 h-full">
          {/* Navbar Menus */}
          <div className="hidden lg:block h-full">
            <NavMenu />
          </div>
          <button
            className="block lg:hidden h-full px-5"
            onClick={handleMobileMenu}
          >
            <FaBars size={16} />
          </button>
          <div className="flex justify-center items-center h-full">
            <div className="sm:relative h-full" ref={searchRef}>
              <ReusableButton
                variant="icon"
                className={`cursor-pointer h-full px-3 rounded-none ${
                  openSearch ? "bg-icon-hover" : "bg-transparent"
                }`}
                rippleColor="bg-gray-700"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <FaSearch className="text-text" size={16} />
              </ReusableButton>

              {/* Search Popup */}
              <Search open={openSearch} />
            </div>
            <div className="sm:relative h-full" ref={notificationRef}>
              <ReusableButton
                variant="icon"
                className={`cursor-pointer h-full px-3 rounded-none ${
                  openNotification ? "bg-icon-hover" : "bg-transparent"
                }`}
                rippleColor="bg-gray-700"
                onClick={() => setOpenNotification(!openNotification)}
              >
                {/* Zoom in out while Swinging Animation  */}
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 10, -10, 10, -10, 10, 0], // swing motion
                    scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    display: "inline-block",
                    originX: 0.5,
                    originY: 0.5,
                  }}
                >
                  <FaRegBell size={20} className="text-text" />
                </motion.div>
              </ReusableButton>
              <div className="absolute top-4 right-20 sm:right-2 bg-red-400 rounded-full w-4 h-4 flex items-center justify-center text-white text-[11px] font-bold">
                4
              </div>

              {/* Notifications popup */}
              <Notification open={openNotification} />
            </div>
            <div className="sm:relative h-full" ref={settingRef}>
              <ReusableButton
                variant="icon"
                className={`flex gap-2 cursor-pointer h-full px-5 rounded-none ${
                  openSettings ? "bg-icon-hover" : "bg-transparent"
                }`}
                rippleColor="bg-gray-700"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <div className="h-full flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
                    alt="Profile"
                    className="w-8 h-8 object-cover"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-text">
                  <span>Samir</span>
                  <FaChevronDown size={10} />
                </div>
              </ReusableButton>

              {/* Settings Popup */}
              <ProfileSettings open={openSettings} />
            </div>
          </div>
        </div>
      </div>
      <AnimatedFadeSlide isVisible={openMenu} direction="down">
        <NavMenu />
      </AnimatedFadeSlide>
    </nav>
  );
};

export default Navbar;
