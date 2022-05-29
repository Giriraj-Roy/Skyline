import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LatestRelease from './components/LatestRelease'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'
import TopTen from './components/TopTen'

const App = () => {
  return (
    <>
      <Navbar/>
      <LatestRelease/>
      <Recommendations/>
      <TopTen/>

      <Footer/>
    </>
  )
}

export default App