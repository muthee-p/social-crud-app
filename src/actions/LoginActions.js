import {createApi, fetchBaseQuery} from '@reactjs/toolkit/query/react';
import {setCredentials, logOut} from '../reducers/LoginReducer';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
    credentials: 'include',
    prepareHeaders: (headers, { getState}) => {
        const token = getState().auth.token
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        } 
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) =>{
    let result = await baseQuery(arg, api, extraOptions)
    if(result?.error?.originalStatus === 403){
        console.log('sending refresh token')
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
       if(refreshResult?.data) {
            const user = api.getState().auth.user
            //store new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
            } else {
                api.dispatch(logOut())
                }
        }
        return result
    }

    export const LoginActions = createApi({
        baseQuery:baseQueryWithReauth,
        endpoints: builder =>({})
    })