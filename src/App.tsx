import React from 'react';
import { Col, Row, Tabs } from 'antd'
import Ticket from './board/ticket'
const { TabPane } = Tabs;

import 'antd/dist/antd.css'
import ScrumBoard from './board/scrumBoard';

interface IProps {

}

interface IState {

}
class App extends React.Component<IProps, IState> {

  render(): React.ReactNode {
    return (
      <>
        <div style={{height: "100%", padding: "10px" }}>
          <h1>Project Title</h1>
          <Tabs defaultActiveKey="1" style={{minHeight: "70vh"}}>
            <TabPane tab="Board" key="1">
              <ScrumBoard/>
            </TabPane>
            <TabPane tab="Tickets" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Charts" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }

}

export default App;
