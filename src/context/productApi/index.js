import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsPostApi = createApi({
  reducerPath: "productsPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerceapi.firdavsdev.uz/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useCreateProductMutation } = productsPostApi;
