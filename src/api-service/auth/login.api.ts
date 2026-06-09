import employeeBaseApi from "../api";
import type { LoginResponse, LoginPayload } from "./types";

export const loginApi = employeeBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload) => {
        const formData = new URLSearchParams();
        formData.append("username", payload.username);
        formData.append("password", payload.password);
        
        return {
          url: "/auth/login",
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;