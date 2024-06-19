import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerceapi.firdavsdev.uz/",
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
