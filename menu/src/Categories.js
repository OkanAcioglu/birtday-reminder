import React from 'react'

const Categories = ({ filterItems }) => {
  //! We will add buttons manually
  return (
    <div className='btn-container'>
      <button
        className='filter-btn'
        onClick={() => {
          filterItems('breakfast')
        }}
      >
        breakfast
      </button>
    </div>
  )
}

export default Categories
