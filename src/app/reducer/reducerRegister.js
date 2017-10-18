import { combineReducers } from 'redux';
import DummyReducer from './../components/test/redux/dummy_reducer'
import ContactReducer from '../components/cliente/redux_contato/contact_reducer'
import LoginReducer from '../components/login/redux_login/login_reducer'


const rootReducer = combineReducers({
    state: (state = {}) => state,
    dummy: DummyReducer,
    contact: ContactReducer,
    login: LoginReducer
});


export default rootReducer;
