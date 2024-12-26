import { bookApi } from "../../redux/api/bookApi";

export const authApiSlice = bookApi.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentails) => ({
                url: 'user/login',
                method: 'POST',
                body: { ...credentails }

            })
        }),
        adminLogin: builder.mutation({
            query: (credentails) => ({
                url: 'auth/login',
                method: 'POST',
                body: { ...credentails }
            })
        }),
        getAllBooks: builder.query({
            query: () => '/book/get',
            providesTags: ['Book']
        }),
        getBooksById: builder.query({
            query: (id) => `/book/get/${id}`,
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/book/add',
                method: 'POST',
                body: { ...newBook }
            }),
            invalidatesTags: ['Books']
        }),
        updateBook: builder.mutation({
            query: ({id,...updated}) => ({
                url: `/book/edit/${id}`,
                method: 'PATCH',
                body: updated
            }),
            invalidatesTags: ['Books']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/delete/${id}`,
                method: 'DELETE',
            }),
            // invalidatesTags: ['Books']
        }),
        addOrder: builder.mutation({
            query: (newOrder) => ({
                url: `/order/post`,
                method: 'POST',
                body: newOrder
            }),
            // invalidatesTags: ['Books']
        }),
    })
})


export const {
    useLoginMutation,
    useAddOrderMutation,
    useGetAllBooksQuery,
    useAdminLoginMutation,
    useGetBooksByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = authApiSlice