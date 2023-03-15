import React, { useState } from "react";
import { Menu } from "antd";
import { DashboardOutlined, ShopOutlined, ShoppingCartOutlined, TeamOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  }

  return (
    <nav className="SideMenu" >
            <div className="menu-toggle " onClick={toggleMenu}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
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
            key: "/products",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
        ]}
      >
        
      </Menu>

    </nav>
  );
}

export default SideMenu;
