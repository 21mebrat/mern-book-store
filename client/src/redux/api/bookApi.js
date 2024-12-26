import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout, setCredentails } from '../../feature/auth/authSlice'
export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken
        if (token) {
            headers.set('autorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error?.originalStatus === 403) {
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult.data) {
            const userName = api.getState().auth.userName
            api.dispatch(setCredentails({ ...refreshResult.data, userName }))
            result = await baseQuery(args, api, extraOptions)
        }

    } else {
        api.dispatch(logout())
    }
    return result
}

export const bookApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes:['Books'],
    endpoints: builder => ({})

})