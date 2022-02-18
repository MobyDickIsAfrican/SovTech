import {UPDATE_PEOPLE} from './CONSTANTS';

const updatePeopleAction = (people) => {
    return {
        type: UPDATE_PEOPLE,
        payload: {people: people}
    }
};

export default updatePeopleAction;