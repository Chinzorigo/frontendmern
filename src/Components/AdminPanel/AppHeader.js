import React from "react";
import { Image, Space, Typography } from "antd";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


function AppHeader() {
  return (
    <header className="AppHeader">
        <Link to="/"><Image preview= {false} width={100} src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" /></Link>
        <Typography.Title>Admin Panel</Typography.Title>
        <Space>
            <BellFilled   style={{ fontSize: 24}}/>
            <UserOutlined style={{ fontSize: 24}}/>
        </Space>
    </header>
  )
}

export default AppHeader;
