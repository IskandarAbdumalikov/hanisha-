import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerceapi.firdavsdev.uz/products/search",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (cart) => {
        console.log(cart);
      },
      providesTags: ["cart"],
    }),
  }),
});

export const { useAddCartMutation } = cartApi;
