import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
    cartItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const isExiting = state.cartItems?.find(item => item._id === action.payload.id)
            if (!isExiting) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    text: "Item Already Exits!",
                });
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

export const { addCart, removeFromCart, clearCart } = cartSlice.actions
export const selectAll = (state) => state.cartItems
export default cartSlice.reducer