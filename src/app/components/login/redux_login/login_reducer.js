import {FETCH_USER} from "./login_action";

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_USER:
            return {all: action.payload.data.data};

        default:
            return state;

    }
};