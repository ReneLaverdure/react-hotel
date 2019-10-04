import React, {useContext} from 'react'
import classes from './RoomFilter.module.css';
import {RoomContext} from '../../roomContext';

// get all unique values
const getUnique = (item,value) => {
  console.log(item)
  return [...new Set(item.map(item => item.fields[value]))];
}

export default function RoomFilter() {
  const context = useContext(RoomContext);
  console.log(context)
  const {
    type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
  } = context.roomData;

  const handleChange = context.handleChange
  console.log(price);
  console.log(maxPrice)
  let types = getUnique(context.roomData.rooms, 'type');
  // add all
  types = ['all', ...types];
  //map to jsx
  types = types.map((item,index) => {
    return <option value={item} key={index} >{item}</option>
  })

  //people guess num
  let people = getUnique(context.roomData.rooms, 'capacity');
  people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
  })
  
  

  return (
    <section className={classes.FilterContainer}>
      <h2 className={classes.FilterTitle}>Search Our Rooms</h2>
        <form className={classes.FilterForm}>
          {/* select type */}
            <div className={classes.FormGroup}>
              <label htmlFor="type">Type</label>
              <select name="type" id="type" value={type} className={classes.FormControl} onChange={handleChange} >
              {types}
              </select>
            </div>
          {/* end select type */}
          {/* Guess number */}
            <div className={classes.FormGroup}>
              <label htmlFor="capacity">Guess</label>
              <select name="capacity" id="capacity" value={capacity} className={classes.FormControl} onChange={handleChange} >
              {people}
              </select>
            </div>
          {/* end guess number */}
          {/* room price */}
            <div className={classes.FormGroup}>
              <label htmlFor="price">Room Price ${price}</label>
                <input type="range" name="price" id="price" min={minPrice}   max={maxPrice} value={price} onChange={handleChange} />
            </div>
          {/* end room price */}
          {/* size */}
          <div className={classes.FormGroup}>
            <label htmlFor="size">Room Size</label>
            <div className={classes.SizeInputs}>
              <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className={classes.SizeInput} />
              <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className={classes.SizeInput} />
            </div>
          </div>
          {/* end size */}
          <div className={classes.FormGroup}>
            <div className={classes.SingleExtra}>
              <label htmlFor="breakfast">Breakfast</label>
              <input type="checkbox" name="breakfast" id="breakfast"     checked={breakfast} onChange={handleChange} />
            </div>
            <div className={classes.SingleExtra}>
              <label htmlFor="pets">pets</label>
              <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            </div>

          </div>
          {/* end size */}
        </form>
    </section>
  )
}
