import React from 'react'
import Review from './Review'

function App() {
  return (
    <>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our Reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App

//! We have some icons in this project. We can technically use font awesome by adding it into the index.html. But we will use React Icons Library.
//! Icons that we use using React Icon Library are components.
//! What good is that we can add them className or style.
//! Also they are added as "svg" as HTML element.

//! Download React-Icons --> npm install react-icons
//! In order to use icon we would need to import specific icon from specific library. We can search specific icons in the website "https://react-icons.github.io/react-icons/"
//! import {FaGithub} from "react-icons/fa" --> if we want to use "FaGithub" we need to add "fa" at the end of the library as "react-icons/fa"
