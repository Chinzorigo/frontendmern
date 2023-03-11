import React from "react";
import { Space } from "antd";
import AppHeader from "./Components/AppHeader/index";
import SideMenu from "./Components/SideMenu/index";
import AppFooter from "./Components/AppFooter/PanelFooter";
import PageContent from "./Components/PageContent";
import OrdersProvider from "./Context/OrdersContext/OrdersContext";

function App() {
  return (
    <OrdersProvider>
      <div className="App">
        <AppHeader />
        <Space className="SideMenuAndPageContent">
          <SideMenu />
          <PageContent />
        </Space>
        <AppFooter />
      </div>
    </OrdersProvider>
  );
}

export default App;
