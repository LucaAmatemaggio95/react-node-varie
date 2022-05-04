import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a34b0.firebaseio.com/'
});

export default instance;