import Axios from "axios";

// const baseURL = "https://localhost:7176/api/v1";
// const baseURL = "http://192.168.100.65:9091/api/v1";
const baseURL = "http://localhost:5050/api/v1";

const sxNetCalaApi = Axios.create({
    baseURL: baseURL, headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
});


sxNetCalaApi.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
);

export default sxNetCalaApi;
