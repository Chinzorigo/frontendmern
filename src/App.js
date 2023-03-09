import React from "react";
import AppHeader from './Components/AdminPanel/AppHeader';
import { Space } from 'antd';
import AppFooter from './Components/AdminPanel/PanelFooter';
import PageContent from './Components/AdminPanel/PageContent';
import SideMenu from './Components/AdminPanel/SideMenu';


function App() {
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

export default App;
