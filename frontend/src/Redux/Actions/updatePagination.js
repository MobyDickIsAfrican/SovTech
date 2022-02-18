import {UPDATE_PAGINATION} from './CONSTANTS';

const updatePaginationAction = (numberOfPages) => {
    return {
        type: UPDATE_PAGINATION,
        payload: {pages: numberOfPages}
    }
};

export default updatePaginationAction;