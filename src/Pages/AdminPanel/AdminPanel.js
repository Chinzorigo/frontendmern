import React from "react";
import { Space } from "antd";
import AppFooter from "../../Components/AdminPanel/PanelFooter";
import AppHeader from "../../Components/AdminPanel/AppHeader";
import SideMenu from "../../Components/AdminPanel/SideMenu";
import PageContent from "../../Components/AdminPanel/PageContent";




function AdminPanel() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent>
        </PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default AdminPanel;
