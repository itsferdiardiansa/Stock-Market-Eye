import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
})

export default axiosInstance
