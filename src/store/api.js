import axios from '../axios' // install axios and config it when you want to use the endpoints

const appid = '5a0696c6d306215f4b96cd42c879bd5e';

export const getWeather = async (cityId) => {
  try {
    const response = await axios.get(`weather?id=${cityId}&appid=${appid}`, { crossdomain: true });
    if (response.status === 200) {
      return response.data
    }
    return false
  } catch (error) {
    // eslint-disable-next-line
    console.error('error', error)
    return false
  }
}
