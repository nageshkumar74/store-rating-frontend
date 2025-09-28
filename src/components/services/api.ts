import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registerUser = (data: {name: string; email: string; password: string; address: string}) =>
    axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data: {email: string; password: string}) =>
    axios.post(`${API_URL}/auth/login`, data);

export const fetchUsers = () => axios.get(`${API_URL}/users`);

export const fetchStores = () => axios.get(`${API_URL}/stores`);

export const fetchRatings = () => axios.get(`${API_URL}/ratings`);
