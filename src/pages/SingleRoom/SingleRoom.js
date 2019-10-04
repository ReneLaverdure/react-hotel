import React, {useContext, useState} from 'react';
import classes from './SingleRoom.module.css';
import {Link} from 'react-router-dom';
import {RoomContext} from '../../roomContext'

import StyledHero from '../../components/StyledHero/StyledHero';
import Banner from '../../components/Banner/Banner';
import { defaultCoreCipherList } from 'constants';

export default function SingleRoom(props) {
  const context = useContext(RoomContext);

  // const [slug, setSlug] = useState({
  //   slug: props.match.params.slug
  // })

  const slug = props.match.params.slug
  const {getRoom} = context;
  const room = getRoom(slug);

  const {name,description,capacity,size,price,extras,breakfast,pets,images} = room.fields;

  const [mainImg, ...defaultImg] = images

  console.log(name)
  return (
    <>
    <StyledHero img={mainImg}>
        <Banner title={name}>
          <Link to='/rooms' className="btn-primary">
            Back To Rooms
          </Link>
        </Banner>
    </StyledHero>

    <section className={classes.SingleRoom}>
      <div className={classes.Imagecontainer}>
        {defaultImg.map((item,index) => {
          return <img className={classes.RoomImage} key={index} src={item} alt={name}/>
        })}
      </div>
      
      <div className={classes.SingleRoomInfo}>
        <article className={classes.Desc}>
          <h3>Details</h3>
          <p className={classes.DescText}>{description}</p>
        </article>

        <article className={classes.Info}>
          <h3>Info</h3>
          <h6 className={classes.InfoItem}>Price: ${price}</h6>
          <h6 className={classes.InfoItem}>Size: {size}</h6>
          <h6 className={classes.InfoItem}>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
          <h6 className={classes.InfoItem}>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
          <h6 className={classes.InfoItem}>{breakfast && 'free breakfast included'}</h6>
        </article>

      </div>
    </section>

    <section className={classes.RoomExtra}>
        <h6>Extra</h6>
        <ul className={classes.Extra}>
          {extras.map((item,index) => {
            return <li key={index}>- {item}</li>
          })}
        </ul>
    </section>
    
    </>
  )
}
