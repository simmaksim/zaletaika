import axios from "axios";
import { api } from "./base";

export const exerciseApi = {
  getExercise: (payload) => {
    return api.get("exercise/", payload);
  },
};
