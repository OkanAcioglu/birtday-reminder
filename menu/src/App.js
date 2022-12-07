import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
//! For the button names we will use category property so that they will be dynamic. More category we have more buttons will be appear.

function App() {
  //! We will use two state: one for menu items and one for categories
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  //! We will filter the list and We will iterate on original items...
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
