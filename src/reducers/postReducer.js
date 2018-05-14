import { NEW_POSTS, FETCH_POSTS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

//Dispatching FETCH_POSTS to the reducer
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
        console.log('action is is dispatched to reducer')
        // return the current state using spread operator
        return {
            ...state,
            items: action.payload
        }
       default:
       return state;
    }

}