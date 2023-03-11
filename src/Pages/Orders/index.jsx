import {  useContext } from "react";
import { OrdersContext } from '../../Context/OrdersContext/OrdersContext';
import UpdateModal from './UpdateModal'
import { Button, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";



function Orders() {
  const { orders, deleteOrders, updateOrders, editingOrders, setDataSource, isEditing,  onEditOrders, resetEditing } = useContext(OrdersContext);

  // const [isEditing, setIsEditing] = useState(false);
  // const [EditingOrders, setEditingOrders] = useState(null);
  // const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      key: "1",
      title: "№",
      dataIndex: "_id",
    },
    {
      key: "2",
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      key: "3",
      title: "Price",
      dataIndex: "price",
    },
    {
      key: "3",
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      key: "4",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditOrders(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                OnDeleteOrders(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddOrders = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newUsers = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newUsers];
    });
  };
  const OnDeleteOrders = (record) => {
    
    Modal.confirm({
      title: "Sure to delete!!!",
      okText: "yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        deleteOrders(record._id)
      },
    });
  };
  // const onEditOrders = (record) => {
  //   setIsEditing(true);
  //   setEditingOrders({ ...record });
  // };
  // const resetEditing = () => {
  //   setIsEditing(false);
  //   setEditingOrders(null);
  // };

  




  return (
    <div className="Users">
      <header className="Users-header">
        <Button onClick={onAddOrders}>Add user</Button>
        <Table columns={columns} dataSource={orders}></Table>
        <UpdateModal
        isEditing={isEditing}
        editingOrders={editingOrders}
        onCancel={resetEditing}
        onSave={updateOrders}
      />
      </header>
    </div>
  );
}
export default Orders;