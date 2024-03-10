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
                }),
            })
        })
    })

export const {useAuthMutation, useGetUsersQuery} = authApi