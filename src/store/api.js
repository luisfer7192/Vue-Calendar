import axios from '../axios' // install axios and config it when you want to use the endpoints

export const getPuzzles = async () => {
  try {
    const response = await axios.get('/puzzles')
    if (response.status === 200) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}
