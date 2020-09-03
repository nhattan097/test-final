import * as types from '../constants/ActionTypes'
import Data from '../data/news.json'
const initState= Data;
const news = (state = initState, action)=>{
    switch (action.type) {
        case types.FETCH_DATA:
          return [...action.news]
        default:
           return state
    }
}
export default news;