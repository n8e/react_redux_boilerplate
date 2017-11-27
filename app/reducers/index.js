import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import profile from './profile';

const rootReducer = combineReducers({
  profile,
});

export default rootReducer;