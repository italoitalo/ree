import axios from 'axios'

const api2 = axios.create({
    baseURL: 'http://localhost:3000/user?user=arquivos'
})

export default api2