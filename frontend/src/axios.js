import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.HOST_API || 'http://localhost:3001',
    timeout: 10000,
    headers: { 
        'X-Custom-Header': 'foobar',    
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
});

export default instance