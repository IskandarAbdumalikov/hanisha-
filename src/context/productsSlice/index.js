import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://market.ilyosbekdev.uz/",
  }),
  tagTypes: ["Product"],
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
  }),
});

export const { useGetAllProductsQuery } = productsApi;
