import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
    reducerPath:'orders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        credentials: 'include',
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => `/order/get`,
        }),
        getOrderByEmail: builder.query({
            query: (email) => `/order/get/${email}`,
        }),
        getSaleInfo: builder.query({
            query: () => `/order/get-sale-info`,
        }), 
    }),
});

export const {
    useGetOrderByEmailQuery,
    useGetAllOrdersQuery,
    useGetSaleInfoQuery
} = orderApi;
