import axios from "axios";

export const api = axios.create({
    baseURL:"cluster0-shard-00-02.pybvs.mongodb.net:27017", 
});

export const createSession = async (email, password) => {
    return api.post('/sessions', { email,password });
}

export const getUsers = async() => {
    return api.get('/users')};

export const fornecedor1 = axios.create({
        baseURL:'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider'
    });
export const fornecedor2 = axios.create({
        baseURL:'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider'
    });