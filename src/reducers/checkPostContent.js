import * as types from '../constants/ActionTypes'

const initState = false;
const checkPostContent = (state = initState, action) => {
    switch (action.type) {
        case types.CHECK_POST_CONTENT:
            return true;
        case types.CHECK_CLOSE_POST:
            return false;
        default:
            return state;
    }
}
export default checkPostContent;