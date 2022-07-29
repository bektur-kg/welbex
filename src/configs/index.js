import axios from 'axios'

const baseURL = 'https://osnovy.pythonanywhere.com/'

// Sets api url for axios
export const instance = axios.create({baseURL})