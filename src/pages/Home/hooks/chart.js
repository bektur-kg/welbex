import {useCallback, useState} from 'react'
import {Home} from '../'

// Custom hook to get all data from db and returning them

const useChart = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const get = useCallback((route, queries) => {
    // Function gets all data with query parameters and saving them to state
    setLoading(true)

    const request = Home.API.Chart.get(`${route}${queries}`)

    request
      .then(res => setData(res.data))
      .catch(err => setError(true))
      .finally(() => setLoading(false))
  }, [])

  // returns all states and requests
  return {
    loading,
    error,
    data,
    actions: {
      get,
    },
  }
}

export const use = useChart