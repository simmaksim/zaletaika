import axios from "axios";
import { api } from "./base";

// const getData = (response) => {
//   return response.data;
// };


// const getError = (e) => {
//   if (e.response) {
//     const { errors } = e.response.data;
//     throw Object.values(errors).flat();
//   }
//   throw null;
// };

// axios.defaults.baseURL = "http://139.144.79.84/api";

export const articleApi = {
  getArticle: (payload) => {
    return api.get("article/", payload);
  },
};