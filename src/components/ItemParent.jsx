import React from 'react';
import { connect } from 'react-redux';
import { setShow } from '../actions/index';

import iconHome from '../images/hinh.svg';
// import ItemSon from './ItemSon';

function ItemParent(props) {
  // const { authorData } = props.Widget;
  // const handleClick = item => {
  //   props.getInfo(item);
  //   props.setShow(true);
  // };
  return (
    <div>
      <div className="item-menu-wrapper">
        <div className="background-item">
          <div className="icon">
            <img src={iconHome} alt="" />
          </div>
          <div className="name-item">
            <span>home</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Widget: state.Widget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setShow: show => dispatch(setShow(show))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemParent);
