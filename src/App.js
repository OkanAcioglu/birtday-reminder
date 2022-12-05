import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [birthdays, setBirthdays] = useState(data)
  const clearHandler = () => {
    setBirthdays((birthdays) => {
      return (birthdays = [])
    })
  }
  return (
    <main>
      <section className='container'>
        <h3>{birthdays.length} birthdays today</h3>
        <List birthdays={birthdays} />
        <button className='btn' onClick={clearHandler}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
