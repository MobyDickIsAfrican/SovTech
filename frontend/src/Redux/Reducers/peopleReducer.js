import {UPDATE_PEOPLE} from '../Actions/CONSTANTS'

const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PEOPLE:
            let newState = {}
            let people = action.payload.people;
            people.forEach(person => {
                newState[person.name] = person
            });
            return newState

        default:
            return {...state}
    }
};

export default peopleReducer;