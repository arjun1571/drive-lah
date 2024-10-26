import { useState } from "react";
import DriveLahLogo from "../../assets/images/logo-image/drive-lah.png";
import Icon from "../Icon/Icon";
import { INavItem } from "../../@interfaces/common.interface";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navItem: INavItem[] = [
    {
      id: 1,
      name: "Learn More",
    },
    {
      id: 2,
      name: "List your car",
    },
    {
      id: 3,
      name: "Inbox",
    },
  ];

  return (
    <div className="bg-[#009999] flex items-center justify-between px-4 py-2">
      {/* Left section with Logo */}
      <div className="flex items-center">
        <img src={DriveLahLogo} alt="Drive Lah Logo" className="md:w-32 w-28 md:h-auto p-2" />
      </div>

      {/* Center section with Nav Links */}
      <div className="hidden md:flex space-x-4 items-center ">
        <ul className="flex space-x-4 text-white">
          {navItem?.map((item: any) => (
            <li key={item?.id} className="cursor-pointer hover:text-gray-200">
              {item?.name}
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center space-x-4 ">
          <Icon name={"person"} variant="outlined" className="bg-white rounded-full p-0.5" />
        </div>
      </div>

      {/* Right section with Profile */}

      <div className="md:hidden flex items-center">
        <Icon onClick={toggleDrawer} name={"menu"} />
      </div>

      {/* Drawer for small screens */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-80 h-full bg-[#004d4d] p-4 z-50 text-white">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-semibold w-full ">Drive Lah</h4>
            <button onClick={toggleDrawer} className="text-right w-full mb-4 text-xl font-bold">
              ✕
            </button>
          </div>
          <ul className="space-y-4 mt-3">
            {navItem?.map((item: any) => (
              <li key={item?.id} className="cursor-pointer hover:text-gray-200">
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
