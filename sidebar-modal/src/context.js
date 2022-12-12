import React, { useState, useContext } from 'react'

const AppContext = React.createContext() //! create context

//! we will create a component
//! we will wrap our whole app in AppProvider

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
//* Custom Hook:
export const useGlobalContext = () => {
  return useContext(AppContext)
}
//! we need to export 2 things:
//! AppContext -> because useContext will looking for that
//! AppProvider
export { AppContext, AppProvider }
//! we will import AppProvider in the index.js

//! After wrapping whole app into the AppProvider now we can use the "value" in any component.
//! There is two way of doing it
//? 1) useContext + AppContext in specific component -> // For example for Home component, import AppContext and also useContext

//? 2) Custom Hook -> If we do not want to import AppContext and useContext every component we can create a custom hook and import it to component
