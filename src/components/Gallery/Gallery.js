import React, {useContext} from 'react';
import classes from './Gallery.module.css';
import {RoomContext} from '../../roomContext';
  
function Gallery(){
  const context = useContext(RoomContext);
  
  let {roomData} = context;
  let gallery = roomData.gallery;

  return(
    <div className={classes.Gallery}>
      <h2>Gallery</h2>
      <div className={classes.GallaryContainer}>
        {gallery.map((item,index) => {
          return <img className={classes.image} key={index} src={item} alt=""/>
        })}
      </div>
    </div>
  )
}

export default Gallery;   