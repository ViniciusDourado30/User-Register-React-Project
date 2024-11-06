import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://172.16.0.31:8000/api",
  headers: { Accept: "application/json" },
});

export default myAxios
