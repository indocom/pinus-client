import axios from 'axios';
import * as actions from './actionTypes';

const BASE_URL = '';
const API_URL = '';

//GET ALL POSTS
export function loadPostsFromAPI() {
    return async function(dispatch) {
        const res = await axios.get(API_URL);
        dispatch(loadPosts(res.data));
    };
}
  
export function loadPosts(posts) {
    return { 
        type: actions.LOAD_POSTS, 
        posts 
    };
}
  
//ADD POST
export function addPostToAPI(post) {
    return async function(dispatch) {
        const res = await axios.post(API_URL, post);
        dispatch(addPost(res.data));
    };
}
  
export function addPost(post) {
    return {
        type: actions.ADD_POST,
        post
    };
}
  
//GET POST
export function getPostFromAPI(id) {
    return async function(dispatch) {
        try {
            const res = await axios.get(`${API_URL}/${id}`);
            if (res.data === '') {
                throw new Error('Cannot find post');
        }
        dispatch(getPost(res.data));
        } catch (error) {
            dispatch(showErr(error));
        }
    };
}
  
export function getPost(post) {
    return {
        type: actions.GET_POST,
        post
    };
}
  
export function showErr(msg) {
    return {
        type: actions.SHOW_ERROR,
        msg
    };
}
  
//DELETE POST
export function sendDeleteToAPI(id) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${id}`);
        dispatch(deletePost(id));
    };
}
  
export function deletePost(id) {
    return {
        type: actions.DELETE_POST,
        id
    };
}
  
//UPDATE POST
export function sendUpdateToAPI(post, id) {
    return async function(dispatch) {
        await axios.put(`${API_URL}/${id}`, post);
        dispatch(updatePost(post, id));
    };
}
  
export function updatePost(post, id) {
    return {
        type: actions.UPDATE_POST,
        post,
        id
    };
}
  
//ADD COMMENT
export function sendCommentToAPI(postId, comment) {
    return async function(dispatch) {
        const result = await axios.post(`${API_URL}/${postId}/comments/`, { comment });
        return dispatch(addComment(postId, result.data));
    };
}
  
export function addComment(postId, comment) {
    return {
        type: actions.ADD_COMMENT,
        postId,
        comment
    };
}
  
//DELETE COMMENT
export function deleteCommentFromAPI(postId, commentId) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
        return dispatch(deleteComment(postId, commentId));
    };
}
  
export function deleteComment(postId, commentId) {
    return {
        type: actions.DELETE_COMMENT,
        postId,
        commentId
    };
}

//UPDATE COMMENT
export function updateCommentInAPI(postId, comment, commentId) {
    return async function(dispatch) {
        await axios.put(`${API_URL}/${postId}/comments/${commentId}`, comment);
        return dispatch(updateComment(postId, comment, commentId))
    }
}

export function updateComment(postId, comment, commentId) {
    return {
        type: actions.UPDATE_COMMENT,
        postId,
        comment,
        commentId
    }
}
 
//VOTE (SIMILAR TO MEDIUM)
export function sendVoteToAPI(id, direction) {
    return async function(dispatch) {
        const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
        return dispatch(vote(id, response.data.votes));
    };
}
  
export function vote(postId, votes) {
    return {
        type: actions.VOTE,
        postId: postId,
        votes: votes,
    };
}