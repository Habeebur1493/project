import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

instance.interceptors.request.use((req) => {
    console.log(req);
    return req;
  });

export default instance

