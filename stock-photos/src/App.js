import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
//! in order to get anythink we have to provide API key...
//! Use the env file to access the env access key...
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const fetchImages = async () => {
    setLoading(true)
    let url
    url = `${mainUrl}${clientID}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image) => {
            //console.log(image)
            return <Photo key={image.id} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App

//! It is much better create a environment variables and then add that env file to the git ignore. So when we push it to the github, we can only see the name of the value.
//! Location of the env file is extremly important and DO NOT put it in the src... Just place it in the root
//! name must start with REACT_APP_ after that it is up to us...
//! Whenever setup the .env file -> restart the dev server
//! DO NOT FORGET to add .env file to the gitignore...
