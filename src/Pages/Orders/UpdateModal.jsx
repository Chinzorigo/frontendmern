import { Modal, Input } from 'antd';
import { useState } from 'react';

const OrdersModal = ({ isEditing, editingOrders, onCancel, onSave }) => {

  const [orders, setOrders] = useState("");

  const handleSave = () => {
    onSave(orders);
  };

  return (
    <Modal
      title="Edit order information"
      visible={isEditing}
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleSave}
    >
      <div>
        <Input
          value={orders.productName}
          onChange={(e) => setOrders({...orders, productName: e.target.value})}
        />
        <br />
        <Input
          value={orders.price}
          onChange={(e) => setOrders({...orders, price: e.target.value})}
        />
        <br />
        <Input
          value={orders.totalPrice}
          onChange={(e) => setOrders({...orders, totalPrice: e.target.value})}
        />
      </div>
    </Modal>
  );
};

export default OrdersModal;