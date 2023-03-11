import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className="AppHeader">
      <Link to="/">
        <Image
          preview={false}
          width={100}
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        />
      </Link>
      <Typography.Title>Admin Panel</Typography.Title>
      <Space size={18}>
        <Badge count={3}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={2} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <UserOutlined style={{ fontSize: 24 }} />
      </Space>
    </header>
  );
}

export default AppHeader;
