import axios from 'axios'

const openApi = axios.create({
  baseURL: 'http://localhost:3003/oapi',
})

export default openApi
