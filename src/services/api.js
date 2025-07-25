<<<<<<< HEAD
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
=======
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
>>>>>>> 25b25d232077d43fea1b67b4e65d70ea3a5087a1
