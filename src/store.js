import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// A store holds the whole state tree of your application.
// The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it.
// To create it, pass your root reducing function to createStore.
// createStore(reducer, [preloadedState], [enhancer])

// reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
// [preloadedState] (any): The initial state. 
// [enhancer] (Function): The store enhancer. The only store enhancer that ships with Redux is applyMiddleware().


const initialState = {};

const middleware = [thunk];

// setup the redux to see the state = https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log('Inside store with initialState ', initialState)
const store = createStore(
     rootReducer,
     initialState,
     composeEnhancers(
     applyMiddleware(...middleware))
);

export default store;