import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState , PostFetchError, IPost} from './type'


import { AppThunk } from '../app/store';
import { receivePosts } from './utils';


const initialState: PostState = {
    isFetching: false,
    isError: false,
    error: { message: "" },
    posts: [],
};

export const blogSlice = createSlice({
    name: 'blogposts',
    initialState,
    reducers: {
        postsFetching: (state) => {
            state.isFetching = true;
        },

        postsReceived: (state, action: PayloadAction<Array<IPost>>) => {
            state.posts = state.posts.concat(action.payload)
            state.isFetching = false;
        },

        setPostsReceived: (state, action : PayloadAction<Array<IPost>>) => {
            state.posts = action.payload;
            state.isFetching = false;
        },

        postsFailed: (state, action: PayloadAction<PostFetchError>) => {
            state.error = action.payload;
            state.isFetching = false;
        },
    }
})


const { actions, reducer } = blogSlice

export const { postsReceived, postsFetching, postsFailed, setPostsReceived } = actions

export default reducer 

// Actions
export const fetchPosts = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(postsFetching());
            const posts = receivePosts(count);
            dispatch(postsReceived(posts))
        } catch (error) {
            dispatch(postsFailed(error));
        }
    }
}

export const fetchLatestPosts = (count : number): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(postsFetching());
            const posts = receivePosts(count);
            dispatch(setPostsReceived(posts))
        } catch (error) {
            dispatch(postsFailed(error));
        }
    }
}



