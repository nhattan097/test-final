import React from 'react';
import '../style/styleappfast.css';
import MainItem from './MainItem';
import NavigationApp from './NavigationApp';
import Drawer from '../components/MenuDrawer';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/index';
function Main() {
  const dispatch = useDispatch();

  const isNavigation = useSelector(state=>state.isNavigation)
  const isGrawMenu = useSelector(state=>state.isGrawMenu)
  const isPostContent = useSelector(state=>state.isPostContent)
  const handleToggle = () => {
    dispatch(actions.toggleMenuDrawer());
  };

  const ElementNavigation = isNavigation ?  <NavigationApp /> :''
  const ElementDrawer = isGrawMenu ?   <Drawer/> :''
  const ElementPostContent = isPostContent ?  <MainItem /> :''
  return (
    <div className="main-app-fast">
      <div className="frame-app-fast">
        <div className="farm-phone-appfast">
          {ElementDrawer}
          <div className="memu-app-fast">
            <div className="icon-menu-app">
              <i className="material-icons icon-flex" onClick={handleToggle}>
                menu
              </i>
            </div>
          </div>
          <div className="content-app-fast">
            <div className="center-app-fast">
              {ElementPostContent}
            </div>
            {/* <NavigationApp /> */}
            {ElementNavigation}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
