import axios from 'axios'

const requestObject = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
  }
})

export default requestObject