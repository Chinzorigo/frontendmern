import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
    const [orders, setOrders] = useState([]);
    
    const getOrders = async () => {
        try {
            
            const response = await axios.get(`http://localhost:8000/api/order`);
            setOrders(response.data.data);
            console.log("getOrders: ", response.data.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        getOrders();
    }, []);

    const deleteOrders = async (_id) => {

        try {
          await axios.delete(`http://localhost:8000/api/order/${_id}`);
            getOrders();
        } catch (error) {
          console.log(error.message);
        }
      };
    

    







    return (
        <OrdersContext.Provider value={{orders, deleteOrders}}>
            {props.children}
        </OrdersContext.Provider>
    );


    

};

export default OrdersProvider;


