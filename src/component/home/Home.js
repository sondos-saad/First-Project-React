import React from 'react'
import About from '../about/About'
import ContactUs from '../contactUs/ContactUs'
import Feature from '../feature/Feature'
import Information from '../information/Information'
import Nav from '../navbar/Nav'

import Price from '../price/Price'
import Services from '../services/Services'
import Header from './header/Header'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Services/>
      <Feature/>
      <Price/>
    <About/>
    <ContactUs/>
    <Information/>
    </div>
  )
}
