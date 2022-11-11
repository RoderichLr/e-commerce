import { useEffect, useState } from 'react'

const UseGetData = (url) => {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)

  const GetData = async () => {
    try {
      const req = await window.fetch(url)
      const res = await req.json()
      setData(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  return { data, loading }
}

export default UseGetData
