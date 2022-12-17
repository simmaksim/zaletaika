import axios from "axios";
import { api } from "./base";

export const menuApi = {
  getMenu: (payload) => {
    return api.get("menu/", payload);
  },
};
