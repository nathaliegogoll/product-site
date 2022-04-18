import React from 'react'
import logo from '../../resources/logo.png';

const Header = () => {
  return (
    <span className='header'>
      <section className='header__logo'>
        <img src={logo} alt="logo"></img>
        <div className='header__text'>Devices</div> 
      </section>
      <div className='header__dev'>Nathalie Jacobsson Gogoll</div>
    </span>
  )
}

export default Header