import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Widget from './Widget';
import { useSelector } from 'react-redux';
import Setting from './Setting';

//
function AsideMenu() {
  const checkPostContent = useSelector(state => state.checkPostContent);

  return checkPostContent ? (
    <div className="aside-menu">
      <Tabs className="wrapper-tab-menu">
        <Tab eventKey={1} title="Settings" className="tab-item-content">
          <Setting />
        </Tab>
        <Tab eventKey={2} title="Widgets" id="tab-item-content">
          <Widget />
        </Tab>
      </Tabs>
    </div>
  ) : (
    <div className="aside-menu">
      <div className="wrapper-tab-menu">Widgets</div>
      <Widget />
    </div>
  );
}

export default AsideMenu;
