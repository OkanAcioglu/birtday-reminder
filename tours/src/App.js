import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true) // extra precaution

    try {
      const response = await fetch(url)
      const data = await response.json()
      setIsLoading(false)
      setTours(data)
    } catch (err) {
      setIsLoading(false) // even if we have error
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <main>
        <Tours tours={tours} />
      </main>
    </>
  )
}

export default App
