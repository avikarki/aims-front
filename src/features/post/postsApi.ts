// Need to use the React-specific entry point to import createApi
import { apiSlice } from "../api/apiSlice";

// Define these types in types folder because this is for test purposes
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Define a service using a base URL and expected endpoints
export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Dummy JSONplaceholder APIs
    getPosts: builder.query<Post[], void>({
      query: () => `/posts`,
      providesTags: (result, _error, _arg) =>
        result
          ? [
              ...result?.map(({ id }) => ({
                type: "Post" as const,
                id,
              })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    createPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (post) => ({
        url: `/posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    updatePost: builder.mutation<Post, Partial<Post> & Pick<Post, "id">>({
      query: ({ id, ...post }) => ({
        url: `/posts/${id}`,
        method: "PUT", // or 'PUT' depending on API
        body: post,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Post", id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApiSlice;
