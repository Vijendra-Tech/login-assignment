import { LOGIN } from './actions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isloggedIn: false,
  userName: '',
};

const UserSlice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('action dispatch', action);
      if (true) {
        state.isloggedIn = true;
        state.userName = action.payload.username;
        return state;
      }
    },
    logout: (state, _) => {
      state.isloggedIn = false;
      return state;
    },
  },
});

// export const {  } = UserSlice.reducer;
export default UserSlice;
export const { login, logout } = UserSlice.actions;
