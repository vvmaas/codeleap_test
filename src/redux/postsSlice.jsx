import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        offset: 0,
    },
    reducers: {
        updatePosts(state, { payload }) {
            return {...state, posts: payload.posts, offset: payload.offset}
        }
    }
})

export const { updatePosts } = slice.actions

export const selectPosts = state => state.posts

export default slice.reducer