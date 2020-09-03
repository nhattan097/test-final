import React from 'react';
import { connect } from 'react-redux';
import { toggleImage, toggleTitle, toggleDiscription } from '../actions';

const SwitchToggle = props => {
  console.log(props);

  const handleOnChangeImage = e => {
    props.toggleImage(e.target.value);
  };

  const handleOnChangeTitle = e => {
    props.toggleTitle(e.target.value);
  };

  const handleOnChangeDiscription = e => {
    props.toggleDiscription(e.target.value);
  };

  console.log(props.Widget.isToggleImage);
  return (
    <div className="wrapper-switch">
      <div className="custom-control custom-switch">
        <input
          value={props.Widget.isToggleImage}
          onChange={handleOnChangeImage}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
        />
        <label className="custom-control-label" htmlFor="customSwitch1" />
        <span>Image</span>
      </div>
      <div className="custom-control custom-switch">
        <input
          value={props.Widget.isToggleTitle}
          onChange={handleOnChangeTitle}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch2"
        />
        <label className="custom-control-label" htmlFor="customSwitch2" />
        <span>Title</span>
      </div>
      <div className="custom-control custom-switch">
        <input
          value={props.Widget.isToggleDiscription}
          onChange={handleOnChangeDiscription}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch3"
        />
        <label className="custom-control-label" htmlFor="customSwitch3" />
        <span>Discription</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Widget: state.Widget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleImage: isToggle => dispatch(toggleImage(isToggle)),
    toggleTitle: isToggle => dispatch(toggleTitle(isToggle)),
    toggleDiscription: isToggle => dispatch(toggleDiscription(isToggle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchToggle);
