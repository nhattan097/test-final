import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector, connect } from 'react-redux'
import {changeColor} from '../actions'
import zingvn from '../images/zing.png'
import moment from 'moment'
const MainItem = props => {
    const news = useSelector(state => state.news);
    return news.data.contentFilter.map((prd, index) => (
        <LazyLoad key={index} height={120} overflow throttle={150} debounce={300}>
            <div
                className="main-item-app"
                style={{ background: `${props.Widget.changeColor}` }}
                key={prd._id}>
                {!props.Widget.isToggleTitle && (
                    <div className="title-news-item">{prd.title}</div>
                )}
                <div className="info-news-item">
                    <div className="name-news-app"><img src={zingvn} style= {{width:"8px", marginBottom:"1px"}} alt =""></img>  news.zing.vn</div>
                    <div className="time-news-app">{moment(prd.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
                {!props.Widget.isToggleImage && (
                    <a href={prd.link}><img className="content-news-app" src={prd.images[0].src} alt=""></img></a>
                )}
                {!props.Widget.isToggleDiscription && (
                    <div className="description-news-app">{prd.description}</div>
                )}
            </div>
        </LazyLoad>
    ));
};

const mapStateToProps = state => {
    return {
        Widget: state.Widget
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeColor: color => dispatch(changeColor(color))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainItem);
