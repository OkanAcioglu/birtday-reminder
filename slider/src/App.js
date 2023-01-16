import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(3)

  //! Depending on index we will manipulate activeSlide , nextSlide , lastSlide classes in the CSS
  //! activeSlide class will be display the slide , lastSlide will be left side of the activeSlide and nextSlide class will accumulate the other slides on right side of the activeSlide. Elements that have lastSlide and nextSlide classes will not be displayed because of overflow: hidder property.
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'
          //! if the personIndex matches the index state this slide will get activeSlide class
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
export default App
