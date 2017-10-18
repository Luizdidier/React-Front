import {CREATE_CLIENT, FETCH_CLIENT, DELETE_CLIENT, UPDATE_CLIENT, FETCH_CEP} from "./client_action";

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_CLIENT:
            return {all:action.payload.data.data};
        case FETCH_CEP:
            return {all:action.payload.data};
        case CREATE_CLIENT:
            return {...state, all: [action.payload.data.data, ...state.all || []]};
        case DELETE_CLIENT:
            return {all: state.all.filter(i => i.id != action.payload.id)};
        case UPDATE_CLIENT:
            const updatedClient = action.payload.data.data
            const contacts = state.all.filter(i => i.id != updatedClient.id);
            return { ...state, all: [...contacts, updatedClient]};



        default:
            return state;
    }

};
