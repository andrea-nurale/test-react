import {configureStore} from "@reduxjs/toolkit";
import counterSlice from './counter/counterSlice'
import {usersReducer} from './users';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersReducer.reducer
    },
})