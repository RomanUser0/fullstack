import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users'
        }),
        auth: build.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body
            })

        }),
        /*login: build.mutation({
            query: (token) => ({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
                url: 'status'
            })
        })*/
    })
})

export const { useAuthMutation, useGetUsersQuery, useLazyGetUsersQuery } = authApi