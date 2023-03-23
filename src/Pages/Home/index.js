import React from "react";
import { Space } from "antd";

import OrdersProvider from '../../Context/OrdersContext/OrdersContext';
import AppHeader from '../../Components/AppHeader/index';
import SideMenu from '../../Components/SideMenu/index copy';
import PageContent from '../../Components/PageContent/index';
import AppFooter from '../../Components/AppFooter/PanelFooter';

function HomeScreen() {
  return (
    <OrdersProvider>
      <div className="Home">
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

export default HomeScreen;