import * as React from 'react';
import { Alert, Breadcrumb, Menu, Tabs, Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;
const TabPane = Tabs.TabPane;

const onTabSelect = (key: string) => window.location.href = `/${key}`;

type Props = {
    selectedTab: string;
};

const MainView: React.SFC<Props> = props =>  (
  <Layout className="layout">
    <Content style={{ padding: '0 50px' }}>
      <Tabs defaultActiveKey={props.selectedTab} onChange={onTabSelect}>
        <TabPane tab="This is a tab" key="1"><Alert message="This is a tab" /></TabPane>
        <TabPane tab="another tab" key="2"><Alert message="This is another tab" /></TabPane>
      </Tabs>
    </Content>
  </Layout>
);

export default MainView;
