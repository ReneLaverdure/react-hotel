import React, {useContext} from 'react'
import classes from './RoomList.module.css';
import Room from '../Room/Room';

import {RoomContext} from '../../roomContext'; 

export default function RoomList() {
  let context = useContext(RoomContext);
  let rooms = context.roomData.sortedRooms

  console.log(rooms)
  if(rooms.length === 0) {
    return(
     <div className={classes.NoRoom}>
       <h3>unfortunately no rooms matched your search parameters</h3>
     </div>
    )
   }

  return (
    <section className={classes.RoomList}>
      <div className={classes.RoomListCenter}>
        {rooms.map(item => {
          return <Room key={item.fields.id} room={item} />
        })}
      </div>
    </section>
  )
}
