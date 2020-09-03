import React, { useState,useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../actions';
import { SketchPicker } from 'react-color';
import useOutsideClick from "../helper/useOutsideClick";

const BackgroundColor = () => {
  const [state, setState] = useState('')
  const [isColor, setColor] = useState(false)
  const ref = useRef();
  const dispatch = useDispatch();

  useOutsideClick(ref, () => {
    if (isColor) setColor(false);
  });
  const handleOnChange = color => {
    setState(color.hex);
    dispatch(changeColor(color.hex));
  };
  const handleColor = () => {
    setColor(!isColor)
  }

  return (
    <div className="wrapper-background">
      <span><strong>Background color</strong></span>
      <div className="block-input-color">
        <div className="block-color" style={{ background: `${state}` }} onClick={() => handleColor()}><i className="material-icons" style={{ margin: "12px" }}>
          color_lens</i></div>
        <div  ref={ref} style={{margin: "14px 0px 0px 11px" } }>{isColor ? <SketchPicker
          style={{ margin: "20px" }}
          color={state}
          onChangeComplete={handleOnChange}
        /> : ''}</div>
      </div>
    </div>
  );
};
export default (BackgroundColor);
