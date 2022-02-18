import {UPDATE_CURRENT_PAGE} from './CONSTANTS';

const updateCurrentPageAction = (page) => {
    return {
        type: UPDATE_CURRENT_PAGE,
        payload: {currentPage: page}
    }
};

export default updateCurrentPageAction;