import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function useCollection(resource) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetchCollection(resource, controller.signal)
      .then(setItems)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError(requestError.message)
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [resource])

  return { items, loading, error }
}