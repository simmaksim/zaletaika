import axios from "axios";

const getData = (response) => {
  return response.data;
};

const getError = (e) => {
  if (e.response) {
    const { errors } = e.response.data;
    throw Object.values(errors).flat();
  }
  throw null;
};

axios.defaults.baseURL = "http://139.144.79.84/api";

export const api = {
  get: (url, params = {}) =>
    axios.get(url, { params }).then(getData).catch(getError),
  post: (url, data = {}, params = {}) =>
    axios.post(url, data, { params }).then(getData).catch(getError),
  patch: (url, data = {}, params = {}) =>
    axios.patch(url, data, { params }).then(getData).catch(getError),
  put: (url, data = {}, params = {}) =>
    axios.put(url, data, { params }).then(getData).catch(getError),
  delete: (url, params = {}) =>
    axios.delete(url, { params }).then(getData).catch(getError),
};

axios.interceptors.request.use(async (config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token && config.headers) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
}, Promise.reject);

axios.interceptors.response.use(null, (error) => {
  if (error.response?.status === 403) {
  }
  return Promise.reject(error);
});
