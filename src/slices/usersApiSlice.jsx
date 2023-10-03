import { apiSlice } from "./apiSlice";
const LOGIN_URL = "/api/auth/login";
const SIGNUP_URL = "/api/auth/signUp";
const UPLOAD_PDF_URL = "/api/verridoc/upload-doc";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: LOGIN_URL,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: SIGNUP_URL,
        method: "POST",
        body: data,
      }),
    }),
    upLoadPdf: builder.mutation({
      query: (data) => ({
        url: UPLOAD_PDF_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useUpLoadPdfMutation } =
  usersApiSlice;
