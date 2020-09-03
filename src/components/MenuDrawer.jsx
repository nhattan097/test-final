import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import user from '../images/user.svg';

function Drawer() {
  const isDisplay = useSelector(state => state.isDisplay);
  const dispatch = useDispatch();
  return (
    <CoverDrawer active={isDisplay ? 'drawer' : 'drawer-active'}>
      <div className="drawer">
        <div className="avarta-box">
          <img className="image-user" src={user} alt="" />
        </div>
        <div className="menu-app-fast">
          <div className="item-menu-app-fast">
            <div className="content-menu-app-fast">
              <i className="material-icons icon-menu-flex">home</i>
              <h5 className="name-menu-flex">Home</h5>
            </div>
          </div>
          <div className="item-menu-app-fast">
            <div className="content-menu-app-fast">
              <i className="material-icons icon-menu-flex">
                picture_in_picture
              </i>
              <h5 className="name-menu-flex">Sức khỏe</h5>
            </div>
          </div>
          <div className="item-menu-app-fast">
            <div className="content-menu-app-fast">
              <i className="material-icons icon-menu-flex">music_video</i>
              <h5 className="name-menu-flex">Âm nhạc</h5>
            </div>
          </div>
          <div className="item-menu-app-fast">
            <div className="content-menu-app-fast">
              <i className="material-icons icon-menu-flex">
                picture_in_picture
              </i>
              <h5 className="name-menu-flex">Thế giới</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="box-shadow"
        onClick={() => dispatch(actions.toggleMenuDrawer())}
      />
    </CoverDrawer>
  );
}

export default Drawer;

export const CoverDrawer = styled.div`
  .drawer {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    background: #258dd7;
    width: 246px;
    height: 717px;
    position: absolute;
    z-index: 2;
    left: ${props => (props.active === 'drawer' ? '-258px' : '0')};
    transition: 0.5s;
    border-radius: 33px 0 0 33px;
  }

  .box-shadow {
    z-index: 1;
    width: 321px;
    background: black;
    opacity: ${props => (props.active === 'drawer' ? '0' : '0.3')};
    display: ${props => (props.active === 'drawer' ? 'none' : 'block')};
    position: absolute;
    height: 717px;
    transition: opacity 0.5s ease-in-out;
    border-radius: 33px;
  }
`;
