import React from "react";
import { Menu, Dropdown, Badge, Image, Space, Typography } from "antd";
import { BellFilled, UserOutlined, MailOutlined } from "@ant-design/icons";
import { CgProfile } from 'react-icons/cg'; 
import { FiSettings } from 'react-icons/fi'; 
import { RiLogoutBoxRLine } from 'react-icons/ri'; 
import { Link } from "react-router-dom";

function AppHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="1"  icon={<CgProfile size={16} />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<FiSettings size={16} />}>
        Settings
      </Menu.Item>
      <Menu.Item key="3" icon={<RiLogoutBoxRLine size={16} />}>
        Logout
      </Menu.Item>
    </Menu>
  );


  return (
    <header className="AppHeader">
      <Link to="/">
        <Image
          preview={false}
          width={100}
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        />
      </Link>
      <Typography.Title>Admin Panel - Ongoing Project</Typography.Title>
      <Space size={18}>
        <Badge count={3}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={2} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Dropdown overlay={menu} trigger={["click"]}>
          <UserOutlined style={{ fontSize: 24, cursor: "pointer" }} />
        </Dropdown>
      </Space>
    </header>
  );
}

export default AppHeader;
