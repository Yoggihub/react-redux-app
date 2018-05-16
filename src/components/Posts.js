import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import PropTypes from 'prop-types';

class Posts extends Component {

    // we don't need this anymore because we don't need the component state anymore because the post will come from redux, from the application state from store.
 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // we don't need this anymore because we don't need the component state anymore because the post will come from redux, from the application state from store.

    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({ posts: data });
    //     });
    // }


    componentWillMount() {
        // fetchPosts will get placed in props
        console.log('Inside componentWillMount with props ', this.props);
        this.props.fetchPosts();
    }

    render() {
        // change this.state.posts to this.props.posts after mapStateToProps implementation coz we Mapped the items from the state to props property in mapStateToProps
        const postItems =  this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div> 
                <h1>Posts Component</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

// get the new items from the state. Get the state from redux and map it to properties of component so we can use it inside our component
// const mapStateToProps = state => ({
//     //use what is been used in root reducer. put the items from state to posts property
//     //Mapped the items from the state to props property
//     posts: state.posts.items
// })
const mapSTP = state => {
    console.log('Inside mapStateToProps with state ', state);
    return {
        posts: state.posts.items
    }
}
//Connects a React component to a Redux store
export default connect(mapSTP, { fetchPosts }) (Posts)