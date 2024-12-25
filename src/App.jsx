import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <div className='pt-28 pb-4'>
        <Home />
      </div>
      <Footer/>
    </div>
  )
}

export default App
