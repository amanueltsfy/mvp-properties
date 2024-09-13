import axios from "axios";
import { AXIOS_TIMEOUT } from "../constants/general";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  signal: new AbortController().signal,
  timeout: AXIOS_TIMEOUT
});

export default API;
