import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const signup = (userdata) => {
  return axios.post(`${API_URL}/register`, userdata);
};

export const login = (userdata) => {
  return axios.post(`${API_URL}/login`, userdata);
};
