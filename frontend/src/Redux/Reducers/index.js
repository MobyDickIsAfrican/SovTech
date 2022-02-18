import {combineReducers} from 'redux';
import currentPageReducer from './currentPageReducer';
import pageReducer from './updateNumberOfPeopleReducer.js';
import peopleReducer from './peopleReducer.js';

const reducer = combineReducers({
    people: peopleReducer,
    pages: pageReducer,
    currentPage: currentPageReducer
})

export default reducer;