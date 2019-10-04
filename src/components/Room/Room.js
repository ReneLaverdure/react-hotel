import React from 'react';
import classes from './Room.module.css';
import {Link} from 'react-router-dom';
import {MdRoomService, MdPeople} from 'react-icons/md'
import {FaMoneyCheckAlt} from 'react-icons/fa'
 
export default function Room({room}) {

  return(
    <div className={classes.card}>
    <img className={classes.CardImg} src={room.fields.images[0]} alt=""/>
    <h3>{room.fields.name}</h3>
    <ul className={classes.Info}>
      <li className={classes.InfoItem}>size: {room.fields.size} ft  <MdRoomService /></li>
      <li className={classes.InfoItem}>price: ${room.fields.price} <FaMoneyCheckAlt /></li>
      <li className={classes.InfoItem}>capacity: {room.fields.capacity}  <MdPeople /></li>
    </ul>
    <Link className={classes.RoomLink} to={`/rooms/${room.fields.slug}`}>
        View Features
    </Link>
  </div>
  )
}