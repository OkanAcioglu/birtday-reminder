import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  //! We use "0" as initial value because array are zero index based.
  //! By default we will show first person
  const [index, setIndex] = useState(0)

  //! We will destructing the data but we will manipulate it with using index state. With this way as the index value change we can change the people that we want to show.
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex
      //! Alternative way without checkNumber function
      // if (index === people.length - 1) {
      //   return (newIndex = 0)
      // }
      newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex
      //! Alternative way without checkNumber function
      // if (index === 0) {
      //   return (newIndex = people.length - 1)
      // }
      newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    //! Make sure different person will come at each click
    if (randomNumber === index) {
      randomNumber = index + 1 //! Can be minus 1
    }
    //! Now we will have problem that we could get bigger or smaller number so checkNumber() function added...
    setIndex(checkNumber(randomNumber))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  )
}

export default Review
