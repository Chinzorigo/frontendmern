import React, { useState } from "react";
import { Menu } from "antd";
import { DashboardOutlined, ShopOutlined, ShoppingCartOutlined, TeamOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="SideMenu">
      <div className="menu-toggle" onClick={toggleMenu}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        // theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="/">
          <DashboardOutlined />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="/users">
          <TeamOutlined />
          <span>Users</span>
        </Menu.Item>
        <Menu.Item key="/products">
          <ShopOutlined />
          <span>Products</span>
        </Menu.Item>
        <Menu.Item key="/orders">
          <ShoppingCartOutlined />
          <span>Orders</span>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

export default SideMenu;