import { FETCH_POSTS } from './types'

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
    );
};