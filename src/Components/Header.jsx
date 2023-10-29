import React,{ useState} from 'react'
import logo from '../img/logo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import '../C_ss/Header.css'
import { SlBasket } from 'react-icons/sl'
import { Link, useLocation } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

 const [{cart}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
      <img src={logo} className='header_logo'/>
      </Link>

      <div className='header_search'>
        <input type="text" />
        {/* Logo */}
        <AiOutlineSearch className='header_searchIcon'/>
      </div>

      <div className='header_nav'>

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Hello Guest
            </span>
            <span className='header_optionLineTwo'>
                Sign In
            </span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Returns
            </span>
            <span className='header_optionLineTwo'>
                & Orders
            </span>
            
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>  
        </div>

        <Link to='/checkout'>
        
        <div className='header_optionBasket'> 
        <SlBasket/>
        <span className='header_optionLineTwo header_basketCount'>{cart?.length}</span>
        </div>
        </Link>

      </div>






    </div>
  )
}

export default Header
