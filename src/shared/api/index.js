import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderAPI = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints: (build) => ({
        fetchPostsData: build.query({
            query: (pageNumber) => `?_limit=10&_page=${pageNumber}`,
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg
            },
        }),
        fetchPostData: build.query({
            query: (id) => `?id=${id}`
        })
    }),
})

export const {useFetchPostsDataQuery} = jsonPlaceholderAPI
export const {useFetchPostDataQuery} = jsonPlaceholderAPI