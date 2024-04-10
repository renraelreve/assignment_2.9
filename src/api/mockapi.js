import axios from "axios";
const BASE_URL = "https://api.data.gov.sg/v1";
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;
