import React  from "react";
import { Image, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Products",
    key: "/product",
  },
  {
    label: "Service",
    key: "/service",
  },

  {
    label: "Login",
    key: "/auth/login",
    children: [
      {
        type: "group",
        label: "",
        children: [
          {
            label: "Admin",
            key: "/admin",
          },
          {
            label: "Vendor",
            key: "vendor",
          },
          {
            label: "Customer",
            key: "customer",
          },
        ],
      },
    ],
  },
];

function Header() {
  const navigate = useNavigate();

  return (
    <header className="AppHeader">
      <Image
        width={100}
        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        preview = {false}
      />

      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        mode="horizontal"
        items={items}
      />
    </header>
  );
}

export default Header;
