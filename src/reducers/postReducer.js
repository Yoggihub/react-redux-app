import { NEW_POSTS, FETCH_POSTS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

//Dispatching FETCH_POSTS to the reducer
export default function(state = initialState, action) {
    console.log('Inside postReducer with initialState initialState', state);

    switch(action.type) {
        case FETCH_POSTS:
        console.log(`Inside postReducer with action ${action} `);
        console.log(`Inside postReducer with action.type ${action.type} `);
        console.log(`Inside postReducer with action.payload ${action.payload} `);
        console.log(`Inside postReducer with state ${JSON.stringify(state)} `);
        // return the current state using spread operator
        //destructureing the state using spread operation and assigning payload to items
        return {
            ...state,
            items: action.payload
        }
       default:
       return state;
    }

}