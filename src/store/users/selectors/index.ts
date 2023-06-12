import { createSelector } from "reselect";
import {RootState} from "../../applicationStore";
import {User} from "../types";


export const getUsersState = (state: RootState) => state.users

export const getUsers=  createSelector(
    getUsersState,
    (userState)=>  userState.data || []

)

export const getUsersLoading = createSelector(
    getUsersState,
    (userState)=> userState.loading
)


export const getError = createSelector(
        getUsersState,
        (userState)=> userState.error
    )


export const getUsersLength =  createSelector(
    getUsers,
    (users)=>  users.length

)

export const getUsersFiltered =  createSelector(
    getUsers,
    (users)=>  users.filter(user => user.email.includes('p'))

)