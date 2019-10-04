import React, {useState} from 'react';

import {FaBook, FaMapMarkedAlt, FaCameraRetro, FaHeadphones, FaPlane, FaShoppingBag} from 'react-icons/fa';
import classes from './Services.module.css';

function Services(){
  const [services] = useState([
    {
      icon: <FaBook />,
      title: "Book in at anytime",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Easy to Find",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    },
    {
      icon: <FaCameraRetro />,
      title: "Insta ready scenery",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    },
    {
      icon: <FaHeadphones />,
      title: "Music on demand",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    },
    {
      icon: <FaPlane />,
      title: "Great Flights",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    },
    {
      icon: <FaShoppingBag />,
      title: "Shopping all Day",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur."
    }
  ])

  return(
    <section className={classes.services}>
      <h2 className={classes.servicesTitle}>Our Services</h2>
      <div className={classes.servicesCenter}>
        {services.map((item,index) => {
          return (
            <article key={index} className={classes.service}>
              <div className={classes.icon}>{item.icon}</div>
              <div className={classes.serviceText}>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>        
  ) 
}

export default Services;