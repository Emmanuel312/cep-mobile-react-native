import axios from 'axios'

const api = axios.create(
{
    baseURL: 'https://node-cep-backend.herokuapp.com'
})

export default api