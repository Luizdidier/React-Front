import {SHARE_VALUE} from "./dummy_action";

export default (state = [], action) => {

    switch (action.type) {

        case SHARE_VALUE:
            return {...state, list: [...state.list || [], action.payload]}

        default: return state;
    }

};
