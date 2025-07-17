import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import type { RootState } from "../../app/store";
import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "../../types";
import { clearCredentials, setCredentials } from "../auth/authSlice";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
  // credentials: "include",
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;

        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: "/auth/refresh",
              method: "POST",
              body: { refreshToken } as RefreshTokenRequest,
            },
            api,
            extraOptions
          );

          if (refreshResult.data) {
            api.dispatch(
              setCredentials({
                ...(refreshResult.data as any),
                persist: (api.getState() as RootState).auth.persist,
              })
            );
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(clearCredentials());
          }
        } else {
          api.dispatch(clearCredentials());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Post"], // Define tag types for cache invalidation
  endpoints: () => ({}),
});

type User = {
  firstName: string;
  lastName: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "POST",
        body: refreshToken,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    getCurrentAuthUser: builder.query<User, void>({
      query: () => "/auth/me",
    }),

    getAllPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useGetCurrentAuthUserQuery,
  useGetAllPostsQuery,
} = authApiSlice;
