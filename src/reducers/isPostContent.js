import * as types from '../constants/ActionTypes';

const initState = false;

const isPostContent = (state = initState, action) => {
    switch (action.type) {
        case types.CLOSE_POST_CONTENT:
            return false;
        case types.SHOW_POST_CONTENT:
            return true;
        default:
            return state;
    }
}
export default isPostContent;