import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'www.grifin.duckdns.org/api'}),
    endpoints: (build) => ({
        auth: build.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body
            }),
        })
    })
})

export const { useAuthMutation} = authApi