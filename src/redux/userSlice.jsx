import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isLogged: false,
    },
    reducers: {
        userLogin(state, { payload }) {
            return {...state, isLogged: true, name: payload}
        },
        userLogout(state) {
            return {...state, isLogged: false, name: ''}
        }
    }
})

export const { userLogin, userLogout } = slice.actions

export const selectUser = state => state.user

export default slice.reducer