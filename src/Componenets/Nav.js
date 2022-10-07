import React from 'react';
import logo from "../Images/logo.png";
import Button from '@material-ui/core/Button';
import '../Componenets/Nav.css';
import { NavLink as Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


function Nav() {

    const [show, setShow] = useState(false);


    return (
        <>
            <nav>
               
                    <ul className='menu'>
                        <li><Link className="header-logo" to='/'><img className='home' src={logo} alt=""></img></Link></li>

                        <li><Link to='/'>Home </Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/printing'>Printing</Link></li>
                        <li><Link to='/design'>Design</Link></li>
                        <li><Link to="/price">Pricing</Link></li>
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>

                        <li>< Button component={Link} to="/about" className="pricing-btn" id="price-btn">See Pricing</Button></li>
                    </ul> 
                



                {/* this is mobile nav */}
                <div className='mobile-nav'>
                <li><Link className="header-logo-mobile" to='/'><img className='home' src={logo} alt=""></img></Link></li>
                 {show?   <ul className='menu-mobile'>
                        <li><Link to='/'>Home </Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/printing'>Printing</Link></li>
                        <li><Link to='/design'>Design</Link></li>
                        <li><Link to="/price">Pricing</Link></li>
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>:null
                    }
                    <li>< Button component={Link} to="/about" className="pricing-btn-mobile" id="price-btn-mobile">See Pricing</Button></li>
                    <Button className='toggle-btn' onClick={() => setShow(!show)}> <MenuIcon />  </Button>
                </div>

            </nav>
        </>
    )
}

export default Nav;