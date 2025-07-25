import axios from 'axios';

const BASE_URL = 'https://swapi.info/api';

export const getPeople = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/people?page=${page}`);
        return response;
    } catch (error) {
        throw error;
    }
};
