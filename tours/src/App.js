import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  //! We are going to setup Remove Tour functionality here because my tours data is here. But we will call it inside the Tour Component (in every tour) so we need to pass the function to the Tour Component with using props...
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

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
  //! If there is no tours in our state we will display smth. and also there is a button that call the fetch again...
  if (tours.length === 0) {
    return (
      <main className='title'>
        <div>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
