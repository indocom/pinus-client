import * as actions from './actions/actionTypes';

const INITIAL_STATE = {
    posts: {}
}

export default function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case actions.LOAD_POSTS: {
            const loadedPosts = action.posts;
            const posts = loadedPosts.reduce((curr, post) => ({...curr, [post.id]: post}), {}); //Assuming the return value from API is array of objects
            return {...state, posts};
        }

        case actions.ADD_POST: {
            const posts = {...state.posts};
            action.post.comments = [];
            posts[action.post.id] = action.post;
            return {...state, posts};
        }

        case actions.DELETE_POST: {
            const posts = {...state.posts};
            delete posts[action.id];
            return {...state, posts};
        }

        case actions.UPDATE_POST: {
            const posts = {...state.posts};
            posts[action.id] = {...posts[action.id], ...action.post};
            return {...state, posts};
        }

        case actions.GET_POST: {
            const post = {};
            post[action.post.id] = action.post;
            return {posts: post};
        }

        case actions.ADD_COMMENT: {
            const posts = {...state.posts};
            const post = posts[action.postId];
            const comments = [...post.comments, action.comment];
            return {
                ...state,
                posts: {
                    ...posts,
                    [action.postId]: {...post, comments}
                }
            }; 
        }

        case DELETE_COMMENT: {
            const posts = {...state.posts};
            const post = posts[action.postId];
            const comments = post.comments;
            const updatedComments = comments.filter(comment => comment.id !== action.commentId);
            return {
                ...state,
                posts: {
                    ...posts,
                    [action.postId]: { ...post, comments: updatedComments }
                }
            };
        }

        case VOTE: {
            const posts = {...state.posts};
            const post = posts[action.postId];
            return {
                ...state,
                posts: {
                    ...posts,
                    [action.postId]: {...post, votes: action.votes}
                }
            };
        }

        case SHOW_ERROR: {
            return {...state, error: action.msg};
        }

        default:
            return state;
    }
}