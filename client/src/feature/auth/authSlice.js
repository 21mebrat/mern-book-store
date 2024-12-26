import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { userName: null, accessToken: null, image: null, searchedData: null },
    reducers: {
        setCredentails: (state, action) => {
            const { userName, accessToken, image } = action.payload
            console.log('userName', userName)
            state.accessToken = accessToken
            state.userName = userName
            state.image = image
        },
        logout: (state, action) => {
            state.accessToken = null
            state.userName = null
        },
        setSearchedData: (state, action) => {
            const { searchedString } = action.payload
            state.searchedData = searchedString
        }
    }
})

export const { setCredentails, logout, setSearchedData } = authSlice.actions
export default authSlice.reducer