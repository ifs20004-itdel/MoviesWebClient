import axios from 'axios';

export default axios.create({
    baseURL: 'https://dfd7-2404-c0-5630-00-167-f555.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})