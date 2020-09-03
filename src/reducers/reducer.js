import {combineReducers} from 'redux'
import Widget from './setWidget.reducer'
import news from './news'
import isDisplay from './isDisplay'
import isWidget from './isWidget'
import isNavigation from './isNavigation'
import isGrawMenu from './isGrawMenu'
import isPostContent from './isPostContent'
import checkPostContent from './checkPostContent';
export default combineReducers({
  Widget,
  news,
  isDisplay,
  isWidget,
  isNavigation,
  isGrawMenu,
  isPostContent,
  checkPostContent
});