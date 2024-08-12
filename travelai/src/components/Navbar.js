import React,{useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Link }  from 'react-router-dom';
import { InputBox} from './InputBox';
import './Navbar.css';
import { Button } from './Button';


function Navbar(){
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const [inputValue, setInputValue] = useState('');
const [button, setButton] = useState(true);

const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    
return(
     <>
     <nav className="navbar">
       <div class="navbar-container">
        <Link to="/" className="navbar-logo">
            TRIPVIZOR  <i className='fab.fa-typo3'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times':'fas fa-bar'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'> 
        <Link  to='/home' className='nav-links'>
        Chat
        </Link>
        </li>
        <li className='nav-item'> 
       
        <Link  to='/service' className='nav-links'>
        Service
        </Link>
       
        </li>
        <li className='nav-item'> 
        <Link  to='/product' className='nav-links'>
        Recommendations
        </Link>
        </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
     </nav>
     </>
    )
}


export default Navbar