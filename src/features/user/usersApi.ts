// Need to use the React-specific entry point to import createApi
import { apiSlice } from "../api/apiSlice";
// import type { Pokemon } from './types'

// Define these types in types folder because this is for test purposes
type Post = {
  userId: number;
  id: number;
  title: string;
  description: string;
};

// Define a service using a base URL and expected endpoints
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => ({
    // url: `/posts`,
    // method: 'POST',
    // body: user
    // }),
    // }),
    // Dummy JSONplaceholder APIs
    getPosts: builder.query<Post[], string>({
      query: () => `/posts`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = userApiSlice
export const { useGetPostsQuery } = userApiSlice;
