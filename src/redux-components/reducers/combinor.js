import { combineReducers } from 'redux';
import username from "./loginUsername";

const allReducers = combineReducers({
    username: username
});

export default allReducers;