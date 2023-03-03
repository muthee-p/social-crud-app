import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInStart: state => {
      state.isLoading = true;
      state.error = null;
    },
    logInSuccess: state => {
      state.isLoading = false;
    },
    logInFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logOut: state => {
      console.log('Logging out...');
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  logInStart,
  logInSuccess,
  logInFailure,
  logOut,
  setUser,
} = authSlice.actions;

export const logIn = ({ username, password }) => async dispatch => {
  dispatch(logInStart());

  try {
    // fetch user data from JSONPlaceholder API
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    const userData = await response.json();

    // check if user exists
    if (!userData || userData.length === 0) {
      dispatch(logInFailure('User not found'));
      return;
    }

    // check if password is correct (in this case, we're using the phone number as the password)
    if (userData[0].phone !== password) {
      dispatch(logInFailure('Incorrect password'));
      return;
    }

    // store user data in the store
    dispatch(setUser(userData[0]));
    dispatch(logInSuccess());
  } catch (error) {
    console.error(error);
    dispatch(logInFailure('An error occurred'));
  }
};

export default authSlice.reducer;
