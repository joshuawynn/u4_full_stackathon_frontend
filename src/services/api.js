import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_BASE_URL

const baseURL = "placeholder"

const Client = axios.create({baseURL, BASE_URL})

export default Client