import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import "../Styles/home.css";


export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
