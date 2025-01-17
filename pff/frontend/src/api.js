import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // Backend API URL

export const getPokemonList = (params) => {
  return axios.get(`${API_BASE}/pokemon`, { params });
};

export const getPokemonDetails = (id) => {
  return axios.get(`${API_BASE}/pokemon/${id}`);
};
