import React, {useContext} from 'react';
import classes from './Featured.module.css';
import {RoomContext} from '../../roomContext';
import Room from '../Room/Room'

function Featured(){
  const rooms = useContext(RoomContext);
  let featured = rooms.roomData.featuredRooms;

  

  return(
    <div className={classes.Featured}>
       <h2>Featured Rooms</h2>
      <div className={classes.FeaturedContainer}>
        {featured.map((item) => {
          return (
            <Room room={item} key={item.fields.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Featured;