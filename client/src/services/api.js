import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/card?card=arquivos',
      });


  export default api

