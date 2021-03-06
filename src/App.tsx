import React from 'react';
import { Tabs } from 'antd'
const { TabPane } = Tabs;
import './styles/layout.scss'
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
        <div style={{ height: "100%" }}>
          <h1>Project Title</h1>
          <Tabs defaultActiveKey="1" style={{minHeight: "75vh"}}>
            <TabPane tab="Board" key="1">
              <ScrumBoard/>
            </TabPane>
            <TabPane tab="Tickets" key="2">
              Content to Tab Pane 2
            </TabPane>
            <TabPane tab="Charts" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Settings" key="4">
              Content to Tab Pane 4
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }

}

export default App;
