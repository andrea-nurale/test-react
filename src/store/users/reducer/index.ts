import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions";
import {InitialStateUsers} from "../types";



const initialState: InitialStateUsers = {
    data: [],
    loading: false,
    error: null
}

export const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchUsers.fulfilled, (state, action)=>{
             state.data = action.payload
             state.loading = false
        })
            .addCase(fetchUsers.pending, (state)=>{
              state.loading = true
            })
            .addCase(fetchUsers.rejected, (state)=>{
                state.loading = false
                state.error = 'error fetch users'
            })
    }
})