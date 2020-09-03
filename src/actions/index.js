import * as types from '../constants/ActionTypes';
import {
  IS_ACTIVE,
  IS_SHOW,
  IS_TABMENU,
  ADD_POSTCONTENT,
  CHANGE_COLOR,
  TOGGLE_IMAGE,
  TOGGLE_TITLE,
  TOGGLE_DISCRIPTION,
  SET_SETTING,
  SET_WIDGET
} from './type';

export const setActive = active => {
  return {
    type: IS_ACTIVE,
    payload: {
      active
    }
  };
};

export const setTabMenu = (id, isAddPost) => {
  return {
    type: IS_TABMENU,
    payload: {
      id,
      isAddPost
    }
  };
};

export const setShow = show => {
  return {
    type: IS_SHOW,
    payload: {
      show
    }
  };
};

export const fetchData = news => {
  return {
    type: types.FETCH_DATA,
    news
  };
};
export const toggleMenuDrawer = () => {
  return {
    type: types.TOGGLE_MENU
  };
};
export const addPostContent = itemPost => {
  return {
    type: ADD_POSTCONTENT,
    payload: {
      itemPost
    }
  };
};

export const changeColor = color => {
  return {
    type: CHANGE_COLOR,
    payload: color
  };
};

export const toggleImage = () => {
  return {
    type: TOGGLE_IMAGE
  };
};

export const toggleTitle = () => {
  return {
    type: TOGGLE_TITLE
  };
};

export const toggleDiscription = () => {
  return {
    type: TOGGLE_DISCRIPTION
  };
};

export const fetchDataWidget = widget => {
  return {
    type: types.FETCH_WIDGET_DATA,
    widget
  };
};
export const pushWidget = widget => {
  return {
    type: types.PUSH_WIDGET_DATA,
    widget
  };
};
export const deleteWidget = id => {
  return {
    type: types.DELETE_WIDGET_DATA,
    id
  };
};

export const setSetting = active => {
  return {
    type: SET_SETTING,
    payload: active
  };
};

export const setWidget = active => {
  return {
    type: SET_WIDGET,
    payload: active
  };
};

export const showNavigation = () => {
  return {
    type: types.SHOW_NAVIGATION
  };
};
export const closeNavigation = () => {
  return {
    type: types.CLOSE_NAVIGATION
  };
};
export const showGrawMenu = () => {
  return {
    type: types.SHOW_GRAW_MENU
  };
};
export const closeGrawMenu = () => {
  return {
    type: types.CLOSE_GRAW_MENU
  };
};
export const showPostContent = () =>{
  return{
    type:types.SHOW_POST_CONTENT
  }
}
export const closePostContent = ()=>{
  return{
    type: types.CLOSE_POST_CONTENT
  }
}
export const checkPostContent = () =>{
  return{
    type: types.CHECK_POST_CONTENT
  }
}
export const checkClosePost = ()=>{
  return{
    type: types.CHECK_CLOSE_POST
  }
}