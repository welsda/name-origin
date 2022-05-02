import axios from "axios";

const namesApi = axios.create({
    baseURL: "https://api.nationalize.io/"
})

export default namesApi;