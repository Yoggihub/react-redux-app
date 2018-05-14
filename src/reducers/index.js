import { combineReducers } from 'redux';
import postReducer from './postReducer';

// combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it.

export default combineReducers({
    posts: postReducer
});
