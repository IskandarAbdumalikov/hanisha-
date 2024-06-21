import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerceapi.firdavsdev.uz/products/search",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (search) => `${search ? `?search=${search}` : ""}`,
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        url:`/${productId}`
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
