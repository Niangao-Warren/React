import { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, [url])
  return [data, loading]
}

export default useURLLoader