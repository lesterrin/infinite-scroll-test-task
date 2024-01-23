import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const jsonPlaceholderAPI = createApi({
    reducerPath: 'jsonPlaceholderAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
    endpoints: (builder) => ({
        fetchPostsData: builder.query({
            query: () => `/`,
        }),
    }),
})
export const { useFetchPostsDataQuery } = jsonPlaceholderAPI