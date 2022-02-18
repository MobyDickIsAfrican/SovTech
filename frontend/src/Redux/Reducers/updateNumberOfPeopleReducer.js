import {UPDATE_PAGINATION} from '../Actions/CONSTANTS';

const pageReducer = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_PAGINATION:
            return action.payload.pages
        default:
            return state
    }
};

export default pageReducer;