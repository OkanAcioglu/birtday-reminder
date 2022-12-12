import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

//! We cannot open modal from the modal because the "button" actually sitting in the home.
//! So we cannot set up state value in the modal that will not work.
//! We could set this up in App.js since it has the Home , Modal , Sidebar
function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App
