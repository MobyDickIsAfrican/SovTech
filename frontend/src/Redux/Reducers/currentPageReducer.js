import {UPDATE_CURRENT_PAGE} from '../Actions/CONSTANTS';

const currentPageReducer = (state = 1, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_PAGE:
            state = action.payload.currentPage
            return state

        default:
            return state
    }
};

export default currentPageReducer;