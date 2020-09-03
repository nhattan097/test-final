import * as types from '../constants/ActionTypes';

const initState = false;

const isGrawMenu = (state = initState, action) => {
    switch (action.type) {
        case types.CLOSE_GRAW_MENU:
            return false;
        case types.SHOW_GRAW_MENU:
            return true;
        default:
            return state;
    }
}
export default isGrawMenu;