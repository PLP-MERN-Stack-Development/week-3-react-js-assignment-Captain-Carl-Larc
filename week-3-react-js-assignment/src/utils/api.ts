// This file contains functions for fetching data from a public API, handling loading and error states.

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}${endpoint}`);
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
};

export const fetchTasks = async () => {
    return await fetchData('/todos');
};