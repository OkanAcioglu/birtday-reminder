import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price }) => {
  //! Where we have the info we would need to setup a conditional rendering
  //! We will use substring() method which will returns part of the string from the starting index up to and excluding the end index, or the end of the string if it is not specified.
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  )
}

export default Tour
