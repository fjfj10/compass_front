import axios from "axios";

export const instance = axios.create({  // axios 공통 설정
    baseURL: "http://13.125.37.22/api"
})
