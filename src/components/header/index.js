import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import menu from '../../assets/img/menu.svg';
import arrow from '../../assets/img/arrow.svg';

export default function Header() {
  const [menuMobile, setMenuMobile] = useState('');
  return (
    <div className={`content-header ${menuMobile}`}>
      <span>Wake Up</span>
      <button type="button" className="btn-menu" onClick={() => setMenuMobile('active-menu')}>
        <img alt="" src={menu} />
      </button>
      <button type="button" className="background-menu-mobile" onClick={() => setMenuMobile('')}> </button>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Community</Link></li>
      </ul>
      <Link to="/" className="btn-gral">
        Get Started
        <img alt="" src={arrow} />
      </Link>
    </div>
  );
}
