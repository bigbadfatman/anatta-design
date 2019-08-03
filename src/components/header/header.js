import React from 'react';
import Logo from 'assets/company-logo.svg';
import ProfileIcon from 'assets/profile-icon.svg';
import CartIcon from 'assets/cart-icon.svg';
import MenuIcon from 'assets/menu-icon.svg';

import './header.scss';

const Header = () => (
  <>
    <header className='page-header'>
      <section className='free-shipping'>FREE US SHIPPING & RETURN</section>
      <section className='header'>
        <span className='mobile-hidden'>
          MEN&nbsp;&nbsp;&nbsp;WOMEN
        </span>
        <span className='desktop-hidden'>
          <img src={MenuIcon} alt='Menu Icon'/>
        </span>
        <span>
          <img className='logo' src={Logo} alt="Logo"/>
        </span>
        <span>
          <p className='mobile-hidden'>
            ABOUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <img src={ProfileIcon}  alt="Profile Icon"/>&nbsp;&nbsp;&nbsp;
          <img src={CartIcon}  alt="Cart Icon"/>
        </span>
      </section>
    </header>
  </>
)

export default Header;
