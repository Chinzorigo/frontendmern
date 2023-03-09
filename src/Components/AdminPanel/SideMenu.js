import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, ShopOutlined, ShoppingCartOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <nav className="SideMenu" >
      <Menu
      onClick={(item) => {
        //item.key
        navigate(item.key)
      }}
        items={[
          {
            label: "Dashboard",
            icon: <DashboardOutlined />,
            key: "/",
          },
          {
            label: "Users",
            icon: <TeamOutlined />,
            key: "/users",
          },
          {
            label: "Products",
            icon: <ShopOutlined />,
            key: "/product",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/order",
          },
        ]}
      ></Menu>
    </nav>
  );
}

export default SideMenu;
