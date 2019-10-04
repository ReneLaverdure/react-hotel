import React from 'react';
import classes from './Hero.module.css';

function Hero({children, Hero}) {

  return(
    <div className={classes.Hero}>
      {children}
    </div>
  )
}

export default Hero;