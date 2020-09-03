import * as types from '../constants/ActionTypes';

const initState = false;

const isNavigation = (state = initState, action) => {
    switch (action.type) {
        case types.CLOSE_NAVIGATION:
            return false;
        case types.SHOW_NAVIGATION:
            return true;
        default:
            return state;
    }
}
export default isNavigation;