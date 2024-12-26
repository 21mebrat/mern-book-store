import { createSlice } from "@reduxjs/toolkit";



const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState: { email: null, accessToken: null, imgUrl: null,role:null },
    reducers: {
        setAdminCredentails: (state, action) => {
            const { email, accessToken, imgUrl,role } = action.payload
            state.accessToken = accessToken;
            state.email = email;
            state.imgUrl = imgUrl;
            state.role = role

        }
    } 
})

export const { setAdminCredentails } = adminAuthSlice.actions
export default adminAuthSlice.reducer