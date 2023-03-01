import { createSlice } from "@reduxjs/toolkit";


const LoginReducer = createSlice({
    name: 'auth', 
    initialState:{user:null, token:null},
    reducers:{
        setCredentials: (state,action) =>{
            const {user, accessToken } = action.payload
            state.user = userstate.token = accessToken
        },
        logOut: (state, action) =>{
            state.user = null
            state.token = null
        }
    },

 
})

export const {serCredentials, logOut} = LoginReducer.actions

export default LoginReducer.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
