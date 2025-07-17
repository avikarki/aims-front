import { menuItems } from "../../../assets/menus";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();

  const renderMenuItems = (items: typeof menuItems) =>
    items.map((item: any, index) => {
      if (item.children) {
        return (
          <SubMenu
            key={index}
            label={
              <div className="flex items-center gap-1 hover:text-primary-hover">
                {item.icon && <item.icon size={16} className="menu-icon" />}
                {item.label}
              </div>
            }
            direction="right"
            // openMenuOn="pointerenter"
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      }

      return (
        <MenuItem
          key={index}
          className="hover:text-primary-hover"
          onClick={() => {
            if (item.path) navigate(item.path);
          }}
        >
          <div className="flex items-center gap-1">
            {item.icon && <item.icon size={16} className="menu-icon" />}
            {item.label}
          </div>
        </MenuItem>
      );
    });

  return (
    <div className="absolute p-5 lg:p-0 lg: w-full lg:static flex flex-col lg:flex-row items-start lg:items-center gap-7 lg:gap-10 bg-white lg:bg-transparent h-fit lg:h-full">
      {menuItems.map((menu: any, index) =>
        menu.children ? (
          <Menu
            className="h-full"
            key={index}
            menuButton={
              <MenuButton className="cursor-pointer hover:text-primary-hover h-full">
                <div className="flex items-center gap-2 h-full">
                  {menu.icon && <menu.icon size={14} className="menu-icon" />}
                  {menu.label}
                  <FaChevronDown size={12} className="ml-3" />
                </div>
              </MenuButton>
            }
            transition
            // openMenuOn="pointerenter"
            onMenuChange={(e) => {
              // Support click also to open
              if (e.open) return;
            }}
          >
            {renderMenuItems(menu.children)}
          </Menu>
        ) : (
          <button
            key={index}
            className="cursor-pointer hover:text-primary-hover h-full"
            onClick={() => menu.path && navigate(menu.path)}
          >
            <div className="flex items-center gap-1 ">
              {menu.icon && <menu.icon size={16} className="menu-icon" />}
              {menu.label}
            </div>
          </button>
        )
      )}
    </div>
  );
};

export default NavMenu;
