import authorData from '../data/Authors.json';
import bookData from '../data/Books.json';

const isShow = false;
const isActiveSetting = false;
const isActiveWidget = true;
const changeColor = '';
const isToggleImage = false;
const isToggleTitle = false;
const isToggleDiscription = false;
const asideMenu = [
  {
    id: 1,
    name: 'settings'
  },
  {
    id: 2,
    name: 'widgets'
  }
];
const widgetList = [
  {
    id: 1,
    name: 'DrawerMenu',
    image: '/images/drawer-menu.svg'
  },
  {
    id: 2,
    name: 'PostContent',
    image: '/images/post-content.svg'
  },
  {
    id: 3,
    name: 'NavigationBar',
    image: '/images/navigation-bar.svg'
  }
];
const initState = {
  authorData,
  bookData,
  asideMenu,
  isShow,
  isActiveSetting,
  isActiveWidget,
  widgetList,
  changeColor,
  isToggleImage,
  isToggleTitle,
  isToggleDiscription
};

function Widget(state = initState, action) {
  switch (action.type) {
    case 'IS_SHOW':
      state.isShow = !action.payload.active;
      return { ...state };
    case 'IS_ACTIVE':
      return { ...state, isActive: !state.isActive };
    case 'GET_INFO':
      const reader = state.authorData.find(
        item => item.id === action.payload.id
      );
      return { ...state, reader };
    case 'IS_TABMENU':
      // state.asideMenu.id
      const tabMenu = state.asideMenu.find(
        item => item.id === action.payload.id
      );
      return { ...state, tabMenu };
    case 'ADD_POSTCONTENT':
      const findPost = state.widgetList.find(
        item => item.id === action.payload.itemPost.id
      );
      return { ...state, findPost };
    case 'CHANGE_COLOR':
      state.changeColor = action.payload;
      return { ...state };
    case 'TOGGLE_IMAGE':
      return {
        ...state,
        isToggleImage: !state.isToggleImage
      };
    case 'TOGGLE_TITLE':
      return {
        ...state,
        isToggleTitle: !state.isToggleTitle
      };
    case 'TOGGLE_DISCRIPTION':
      return {
        ...state,
        isToggleDiscription: !state.isToggleDiscription
      };
    case 'SET_SETTING':
      return { ...state, isActiveSetting: !state.isActiveSetting };
    case 'SET_WIDGET':
      return { ...state, isActiveWidget: !state.isActiveWidget };
    default:
      return state;
  }
}
export default Widget;
