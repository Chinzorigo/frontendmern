import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/AdminPanel/Dashboard";
import Product from "../../Pages/AdminPanel/Product";
import Users from "../../Pages/AdminPanel/Users";
import Order from "../../Pages/AdminPanel/Order";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
  );
}

export default AppRoutes;
