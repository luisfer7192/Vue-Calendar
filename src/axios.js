import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://private-4e9199-magicbox600.apiary-mock.com' // put the base url here
})

export default instance
