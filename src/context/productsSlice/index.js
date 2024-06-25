import { api } from "../api";
export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: "products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "products/create",
        method: "POST",
        body,
      }),
      providesTags: ["Product"],
    }),
    getCategory: builder.query({
      query: (params) => ({
        url: "category",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useGetCategoryQuery,
} = productsApi;
