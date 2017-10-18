import {CREATE_CONTACT, FETCH_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, GET_CONTACT} from "./contact_action";

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_CONTACT:
            return {all:action.payload.data.data};
        case CREATE_CONTACT:
            return {...state, all: [action.payload.data.data, ...state.all || []]};
        case DELETE_CONTACT:
            return {all: state.all.filter(i => i.id != action.payload.id)};
        case UPDATE_CONTACT:
            const updatedContact = action.payload.data.data
            const contacts = state.all.filter(i => i.id != updatedContact.id);
            return { ...state, all: [...contacts, updatedContact]};
        case GET_CONTACT:
            return {contact: action.payload};


        default:
            return state;
    }

};
