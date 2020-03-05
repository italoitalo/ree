import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/card?card=arquivos',
    timeout: 600000,
   });


  export default api

