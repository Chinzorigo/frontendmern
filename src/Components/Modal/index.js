import React, { useContext} from "react";
import { Modal } from "antd";
import InventoryContext from "../../Pages/Inventory/index"

const AppModal = (props) => {
  const state = useContext(InventoryContext); 
  console.log(props.datasent);
  return (
    <div>
      <Modal {...props} {...state}></Modal>
    </div>
  );
};

export default AppModal;
