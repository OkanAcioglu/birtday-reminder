import React from 'react'
import Tour from './Tour'
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          //! {...tour} means that we will access to all the properties that in the object
          return <Tour key={tour.id} {...tour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
