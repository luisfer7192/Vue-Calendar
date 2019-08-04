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

export const createPuzzles = async (data) => {
  try {
    const response = await axios.post('/puzzles', data)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const updatePuzzles = async (data, puzzleId) => {
  try {
    const response = await axios.put(`/puzzles/${puzzleId}`, data)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const deletePuzzles = async (puzzleId) => {
  try {
    const response = await axios.delete(`/puzzles/${puzzleId}`)
    if (response.status === 200 || response.status === 204) {
      return true
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const createRule = async (data, puzzleId) => {
  try {
    const response = await axios.post(`/puzzles/${puzzleId}/rules`, data)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const updateRule = async (data) => {
  try {
    const response = await axios.put(`/rules/${data.id}`, data)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const deleteRule = async (ruleId) => {
  try {
    const response = await axios.delete(`/rules/${ruleId}`)
    if (response.status === 200 || response.status === 204) {
      return true
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const getRules = async (puzzleId) => {
  try {
    const response = await axios.get(`puzzles/${puzzleId}/rules`)
    if (response.status === 200) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}

export const getRule = async (ruleId) => {
  try {
    const response = await axios.get(`rules/${ruleId}`)
    if (response.status === 200) {
      return response.data
    }
    return false
  } catch (error) {
    console.error('error', error)
    return false
  }
}
