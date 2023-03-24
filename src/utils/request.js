import axios from "axios";

const request = axios.create({
    baseURL: 'https://milk-tea-shop-server.onrender.com/api'
})

export default request
