import dotenv from 'dotenv';
import axios from 'axios';
 const apiUrl = import.meta.env.API_URL;

export const submitContact = async ({ name, email, phone, location, message }) => {
    try {
        const response = await axios.post('http://localhost:5000/api/contacts/', {
            name, email, phone, location, message
        });

        return response.data;
    } catch (error) {
        const errorMessage = error.response 
            ? `Error: ${error.response.data.message || error.response.statusText}` 
            : `Error: ${error.message}`;
        console.error(errorMessage);

        throw new Error(errorMessage);
    }
};