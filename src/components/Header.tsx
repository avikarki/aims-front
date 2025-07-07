import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "./header.css";

const Header = () => {
  return (
    <Menu
      menuClassName="my-menu"
      menuButton={<MenuButton className="menu-button">Menu</MenuButton>}
    >
      <SubMenu label="New" className="my-submenu">
        <MenuItem>Create</MenuItem>
        <MenuItem>Open</MenuItem>
      </SubMenu>
      <SubMenu label="Edit">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
        <SubMenu label="Find">
          <MenuItem>Find...</MenuItem>
          <MenuItem>Find Next</MenuItem>
          <MenuItem>Find Previous</MenuItem>
          <SubMenu label="Next">
            <MenuItem>Next 1</MenuItem>
            <MenuItem>Next 1</MenuItem>
            <MenuItem>Next 1</MenuItem>
            <MenuItem>Next 1</MenuItem>
          </SubMenu>
        </SubMenu>
      </SubMenu>
      <MenuItem className="my-menu-item">Print...</MenuItem>
    </Menu>
  );
};

export default Header;
