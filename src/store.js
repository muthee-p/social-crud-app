import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import authReducer from './features/auth/authSlice';
import postReducer from './features/posts/Posts'

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    posts: postReducer
  },
});
