import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import authReducer from './features/auth/authSlice';
import postReducer from './features/posts/Posts';
import commentReducer from './features/comments/Comments';

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer
  },
});
