import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Product from "../../Pages/Products";
import Users from "../../Pages/Users";
import Order from "../../Pages/Orders";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
  );
}

export default AppRoutes;
