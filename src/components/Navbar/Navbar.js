import React, {useState} from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'
import {GiFireBowl} from 'react-icons/gi'


function Navbar() {

  const [nav, setNav] = useState(false);

  const handletoggle = () => {
    setNav(!nav);
  }

  console.log(classes.Navbar)

  return (
    <nav className={classes.Navbar} >

      <div className={classes.NavbarLeft}>
        <Link className={classes.HomeLink} to='/'>
          <h1>
            Hestia
            <GiFireBowl />
          </h1>
        </Link>

        <button onClick={handletoggle} className={classes.NavIconButton}>
          <FaAlignRight className={classes.NavIcon} />
        </button>
      </div>

        <ul className={nav ? classes.NavToogleOn : classes.NavbarRight}>
          <li className={classes.NavbarRightItem}>
            <Link className={classes.NavLink} to='/'>
              Home
            </Link>
          </li>
          <li className={classes.NavbarRightItem}>
            <Link className={classes.NavLink} to='/rooms'>
              Rooms
            </Link>
          </li>
        </ul>
     
    </nav>
  )
}

export default Navbar;
