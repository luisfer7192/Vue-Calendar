import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/' // put the base url here
})

export default instance
