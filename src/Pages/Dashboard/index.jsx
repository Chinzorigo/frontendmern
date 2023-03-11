import React, { useContext } from "react";
import {
  OrdersContext,
  OrdersProvider,
} from "../../Context/OrdersContext/OrdersContext";
// import from Antd
import Typography from "antd/es/typography/Typography";
import { Card, Space, Statistic, Table } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

function Dashboard() {
  const { orders } = useContext(OrdersContext);

  return (
    <Space size={20} direction="vertical">
      <h1>Dashboard</h1>
      <Space direction="horizontal">
        <DashBoardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={555555}
        />
        <DashBoardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Users"}
          value={888888}
        />
        <DashBoardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "black",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Products"}
          value={999999}
        />
        <DashBoardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={55555555555}
        />
      </Space>
      <Space>
          <Typography.Text>Recent Orders</Typography.Text>
          <Table
            columns={[
              {
                title: "Title",
                dataIndex: "productName",
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
              },
              {
                title: "Price",
                dataIndex: "price",
              },
            ]}
            dataSource={orders}
            // loading={loading}
            pagination={false}
          ></Table>
      </Space>
    </Space>
  );
}

export function DashBoardCard({ title, value, icon }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboard;
