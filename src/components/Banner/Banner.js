import React from 'react'
import classes from './Banner.module.css';

export default function Banner({title, subtitle, children}) {
  return (
    <div className={classes.Banner}>
      <h1 className={classes.Title}>{title}</h1>
      <p className={classes.Sub}>{subtitle}</p>
      {children}
    </div>
  )
}
