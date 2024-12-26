import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './app.css'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen px-4 py-6 max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
