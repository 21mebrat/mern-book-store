import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../../feature/cartItems/cartSlice';
import authSlice from '../../feature/auth/authSlice';
import { authApiSlice } from '../../feature/auth/authApiSlice';
import { orderApi } from '../../feature/order/orderApi';
import adminAuthSlice from '../../feature/admin/adminAuthSlice'
export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        cart: cartSlice,
        auth: authSlice,
        adminAtuh: adminAuthSlice 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApiSlice.middleware)
            .concat(orderApi.middleware),
    devTools: true,
});
