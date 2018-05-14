import { NEW_POSTS, FETCH_POSTS } from './types';


// thunk middleware allows us to do call the dispatch function directly so we can make asynchronous request
// dispatch is more like a resolver or promise
export const fetchPosts = () => dispatch => {
        // We no longer use the this.setState because that used to set the component state what we want to do is to dispatch the data to the reducer
        console.log('fetching');
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(posts =>  
            // Now We are going to be Dispatching FETCH_POSTS to the reducer
            dispatch({
             type: FETCH_POSTS,
             payload: posts
         })
        );
    };