import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('hello world')
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ıpsum</h3>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>Paragraphs</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          fugiat.
        </p>
      </article>
    </section>
  )
}

export default App
