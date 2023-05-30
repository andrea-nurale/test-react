import {createAsyncThunk} from "@reduxjs/toolkit";
import {USERS_URL} from '../../../utils'


export const fetchUsers: any = createAsyncThunk(
    'user/fetch',
    async (_, thunkAPI)=>{
        try {

            const response = await fetch(USERS_URL)
            if(response.ok){
                return response.json()
            }
            return thunkAPI.rejectWithValue('error')

        }
        catch (error){
            return error
        }
    }
)