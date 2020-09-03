import * as types from '../constants/ActionTypes'
const initState= true;
const isDisplay = (state = initState, action) =>
{
    switch (action.type) {
        case types.TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}
export default isDisplay;