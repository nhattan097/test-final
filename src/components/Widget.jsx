import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

const Widget = props => {
  const dispatch = useDispatch();

  const handleOnClick = id => {
    var Arr = [];
    props.Widget.widgetList.forEach(wid => {
      if (wid.id === id) {
        Arr.push(wid);
      }
    });
    dispatch(actions.pushWidget(Arr));
    if (id === 1) dispatch(actions.showGrawMenu());
    if (id === 2) dispatch(actions.showPostContent());
    if (id === 3) dispatch(actions.showNavigation());
  };
  return (
    <div className="wrapper-widget">
      {props.Widget.widgetList.map((item, index) => (
        <div
          className="widget"
          key={index}
          onClick={() => {
            handleOnClick(item.id);
          }}>
          <img className ="img-widget" src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Widget: state.Widget
  };
};

export default connect(
  mapStateToProps,
  null
)(Widget);
