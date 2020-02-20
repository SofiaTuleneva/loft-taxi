import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import route from './route';

export default combineReducers({
	auth,
	profile,
	route,
});
