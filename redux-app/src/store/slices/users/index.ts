import {createSlice} from "@reduxjs/toolkit";
import {Page} from "../../../interfaces";

export const usersSLice =  createSlice({
    name: "users",
    initialState: {
        list: []
    },
    reducers : {
        setUsersList : (state, action) => {
            state.list = action.payload
        }
    }
})

export const { setUsersList } = usersSLice.actions
export default usersSLice.reducer

export const getAllUsers = () => async  (dispatch : any) => {
    const res =  await fetch("https://reqres.in/api/users");
    const page = await res.json() as Page
    dispatch(setUsersList(page.data))
}