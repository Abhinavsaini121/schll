import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Stories from '../component/Stories'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <>
      <Header/>
        <Hero/>
      <Stories/>
      <Footer/>
    </>
  )
}

export default Home