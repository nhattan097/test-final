import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SwitchToggle from './SwitchToggle';
import BackgroundColor from './BackgroundColor';

const Setting = () => {
  return (
    <div className="wrapper-setting">
      <div className="post-required">
        <span className="title">POST Required</span>
        <SwitchToggle />
        <BackgroundColor />
      </div>
    </div>
  );
};

export default Setting;
