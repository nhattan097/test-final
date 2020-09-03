import * as types from '../constants/ActionTypes'
const tempState = [];

const isWidged = (state = tempState, action) => {
    switch (action.type) {
        // case types.FETCH_WIDGET_DATA:
        //     return [...state]
        case types.PUSH_WIDGET_DATA:
            var kt = false;
            state.forEach(arr => {
                if (arr[0] === action.widget[0])
                    kt = true;
            });
            if (kt) {
                alert('Already Exist')
            }
            else (state.push(action.widget))
            return [...state]
        //
        case types.DELETE_WIDGET_DATA:
           return state.filter(el => el[0].id !== action.id)
        //
        default:
            return [...state]
    }
}
export default isWidged;