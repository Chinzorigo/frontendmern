import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const [orders, setOrders] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingOrders, setEditingOrders] = useState(null);

  const getOrders = async () => {
    try {
      const response = await axios.get(`https://ecommerce4showcase-api.onrender.com/api/order`);
      setOrders(response.data.data);
      console.log("getOrders: ", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const deleteOrders = async (_id) => {
    try {
      await axios.delete(`https://ecommerce4showcase-api.onrender.com/api/order/${_id}`);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== _id)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const createOrders = async (newOrders) => {
    try {
      const response = await axios.post(
        // "http://localhost:8000/api/order",
        "https://ecommerce4showcase-api.onrender.com/api/order",
        newOrders
      );
      setOrders((prevOrders) => [...prevOrders, response.data.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateOrders = async (updatedOrders) => {
    try {
      const response = await axios.put(
        // `http://localhost:8000/api/order/${editingOrders._id}`,
        `https://ecommerce4showcase-api.onrender.com/api/order/${editingOrders._id}`,
        updatedOrders
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === response.data.data._id ? response.data.data : order
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEditOrders = (record) => {
    setIsEditing(true);
    setEditingOrders({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingOrders(null);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        deleteOrders,
        createOrders,
        updateOrders,
        isEditing,
        editingOrders,
        onEditOrders,
        resetEditing,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
