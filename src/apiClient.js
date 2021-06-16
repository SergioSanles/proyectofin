
import axios from 'axios'

// TODO
let PLATFORM_URL = "http://localhost:3000/"

export const apiClient = axios.create({
    baseURL: PLATFORM_URL
})