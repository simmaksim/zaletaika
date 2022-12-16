import { api } from "./base";

export const authApi = {
  signIn: (payload) => {
    return api.post("auth/login/", payload);
  },
  signUp: (payload) => {
    return api.post("auth/signup/", payload);
  },
};
