import React from 'react';
import ItemParent from '../components/ItemParent';
import Icon from '../images/icon.svg';
import ItemSon from './ItemSon';
function MenuWidget() {
  return (
    <div className="editor-app">
      <div className="nav-app-info">
        <img className="icon-app" src={Icon} alt="" />
        <div className="info-app">
          <div className="name-app">Nevable</div>
          <div className="quantity-screen">8 Screens</div>
        </div>
      </div>
      <ul className="nav">
        <ItemParent />
        <ItemSon/>
      </ul>
    </div>
  );
}
export default MenuWidget;
