import { combineReducers } from 'redux';
import Home from '../pages/login/Reducer.js';

const rootReducers = combineReducers({
  home: Home
});
export default rootReducers;