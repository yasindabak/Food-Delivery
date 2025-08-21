import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiCart, BiMenu } from 'react-icons/bi';
import { FaCentos } from 'react-icons/fa'; // <-- Eksik import tamamlandı
import './Navbar.css';
import { FoodContext } from '../../context/FoodContext';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { getCartCount } = useContext(FoodContext);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000);
  };

  const scrollToMenu = () => {
    const menuSection = document.querySelector('.header_section h1');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {loading && (
        <div className='loader-container'>
          <div className="loader">
            <FaCentos className='loader-icon' />
          </div>
        </div>
      )}

      <div>
        <nav className='navbar'>
          <div>
            <Link to='/'>
              <h2 className='header-1'>Burgry</h2>
            </Link>
          </div>

          <div className='search-bar'>
            <input type='text' className='search-input' placeholder='Search for products....' />
            <button className='search-btn'>Search</button>
          </div>

          <div className='icons'>
            <div className='profile-group'>
              <BiUser className='icon' />
              <div className="dropdown-menu">
                <Link to='/login' className='dropdown-item'><p>Login/Sign Up</p></Link>
                <Link to='/orders' className='dropdown-item'><p>Orders</p></Link>
                <p className='dropdown-item'>Logout</p>
              </div>
            </div>

            <div className='menu-link' onClick={scrollToMenu} style={{ cursor: 'pointer' }}>
              <BiMenu className='icon' />
            </div>

            <button className='cart-icon' onClick={() => handleNavigation('/cart')}>
              <BiCart className='icon' />
              <span className='cart-qty'>{getCartCount()}</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
