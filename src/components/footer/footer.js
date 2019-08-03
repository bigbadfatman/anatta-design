import React from 'react';
import FBIcon from 'assets/facebook-icon.svg';
import InstaIcon from 'assets/instagram-icon.svg';
import GlassIcon from 'assets/magnifying-glass-icon.svg';
import FRIcon from 'assets/free-returns-icon.svg';
import ESIcon from 'assets/express-shipping-icon.svg';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <>
    <section className='footer-benefits'>
      <div className='benefit mobile-hidden'>
        <img src={ESIcon} alt="Secure Payment"/>
        Secure Payment
      </div>
      <div className='benefit'>
        <img src={ESIcon} alt="Express Shipping"/>
        Express Shipping
      </div>
      <div className='benefit'>
        <img src={FRIcon} alt="Free Returns"/>
        Free Returns
      </div>
    </section>
    <footer className='page-footer'>
      <section className='footer-section newsletter-section'>
        <div className='newsletter-form'>
          <div>
            <p className='footer-title'>
              newsletter
            </p>
            <input className='footer-input' placeholder='Enter email'/>
          </div>
          <input type='button' value='JOIN US' className='footer-join-button'/>
        </div>
        <div className='social-icons'>
          <img className='social-icon' src={InstaIcon} alt='Instagram Link'/>
          <img className='social-icon' src={FBIcon}  alt='Facebook Link'/>
        </div>
      </section>
      <section className='footer-section'>
        <nav className='links mobile-hidden'>
          <p className='footer-title link'>MEN</p>
          <Link to='/1' className='link'>OCA Low</Link>
          <Link to='/1' className='link'>OCA High</Link>
          <Link to='/1' className='link'>CATIBA Low</Link>
          <Link to='/1' className='link'>OCA High</Link>
        </nav>
        <nav className='links mobile-hidden'>
          <p className='footer-title link'>WOMEN</p>
          <Link to='/1' className='link'>OCA Low</Link>
          <Link to='/1' className='link'>OCA High</Link>
          <Link to='/1' className='link'>CATIBA Low</Link>
          <Link to='/1' className='link'>OCA High</Link>
        </nav>
        <nav className='links mobile-hidden'>
          <p className='footer-title link'>SUPPORT</p>
          <Link to='/1' className='link'>FAQ</Link>
          <Link to='/1' className='link'>Returns</Link>
          <Link to='/1' className='link'>Live Chat</Link>
        </nav>
        <nav className='links desktop-hidden'>
          <p className='footer-title link'>SHOP</p>
          <Link to='/1' className='link'>CATIBA</Link>
          <Link to='/1' className='link'>OCA</Link>
        </nav>
        <nav className='links mobile-hidden'>
          <p className='footer-title link'>ABOUT</p>
          <Link to='/1' className='link'>Misson</Link>
          <Link to='/1' className='link'>Vision</Link>
          <Link to='/1' className='link'>Future</Link>
        </nav>
        <nav className='links desktop-hidden'>
          <p className='footer-title link'>ABOUT</p>
          <br/>
          <br/>
          <p className='footer-title link'>BLOG</p>
        </nav>
        <nav className='links desktop-hidden'>
          <p className='footer-title link'>ABOUT</p>
          <Link to='/1' className='link'>FAQ</Link>
          <Link to='/1' className='link'>Returns</Link>
          <Link to='/1' className='link'>Live Chat</Link>
        </nav>
        <nav className='links'>
          <p className='footer-title link'>POP UP STORES</p>
          <Link to='/1' className='link'>Find Near You</Link>
          <Link to='/1' className='link'>Register</Link>
          <div className='shoe-search-input-wrapper mobile-hidden'>
            <input className='shoe-search-input' placeholder='Find your sneakers here'/>
            <img src={GlassIcon} alt="Search"/>
          </div>
        </nav>
      </section>
      <section className='footer-section footer-bottom'>
        Copyright © 2019 CARIUMA. All Rights Reserved.
        <nav>
          <Link to='/1' href='/'>Terms of Service</Link>
          &nbsp;|&nbsp;
          <Link to='/1' href='/'>Privacy Policy</Link>
        </nav>
      </section>
    </footer>
  </>
)

export default Footer;
