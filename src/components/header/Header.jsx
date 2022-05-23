import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
     <div class=" container header__container">
      <h5>Hello I'm</h5>
      <h1>Vensan Drot</h1>
      <h5 class="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div class='me'>
        <img src={ME} alt="" />
      </div>
      <a href="#contact" class="scroll__down">Scroll Down</a>

     </div> 
    </header>
  )
}

export default Header