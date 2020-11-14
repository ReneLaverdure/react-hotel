import React, {useState, createContext, useEffect} from 'react';
import items from './roomData';

export const RoomContext = createContext();

export const RoomProvider = (props) => {

  const [roomData, setRoomData] = useState({
    rooms: items,
    sortedRooms: [],
    featuredRooms: [],
    gallery: [],
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  })

  useEffect(() => {
   

    const filterRooms = () => {
      let {
        rooms, type, capacity, price, minSize, maxSize, breakfast, pets
      } = roomData
      // all the room
      let tempRooms = [...rooms];
      capacity = parseInt(capacity);
      price = parseInt(price);
  
      
      //filter by type
      if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.fields.type === type)
      }
      //filter by capacity
      if(capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity)
      }
      // filter by price
      tempRooms = tempRooms.filter(room => room.fields.price <= price);
      //filter by size
      tempRooms =tempRooms.filter(room => room.fields.size >= minSize && room.fields.size <= maxSize);
      //filter by breakfast
      if(breakfast) {
        tempRooms = tempRooms.filter(room => room.fields.breakfast === true);
      }
      //filter by pets
      if(pets) {
        tempRooms = tempRooms.filter(room => room.fields.pets === true);
      }
  
      setRoomData({
        ...roomData,
        sortedRooms: tempRooms
      })
    }

    filterRooms();
  
  }, [roomData.type, roomData.capacity, roomData.price, roomData.minSize, roomData.maxSize, roomData.breakfast, roomData.pets]);


  useEffect(() => {
    let rooms = roomData.rooms;

    let featuredRooms = rooms.filter(room => room.fields.featured === true);

    
    let maxPrice = Math.max(...rooms.map(item => item.fields.price));
    let maxSize = Math.max(...rooms.map(item => item.fields.size));

    let images = [];
    for(let i = 0; i < 9; i++){
      images.push(rooms[i].fields.images[0]);
    }
    
    setRoomData({
      ...roomData,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice,
      maxSize,
      gallery: images
    })

  }, [])



  

 const handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name;

    setRoomData({
      ...roomData,
      [name]: value
    }) 

  }

  const getRoom = (slug) => {
    let tempRooms = [...roomData.rooms];
   
    const room = tempRooms.find(room => room.fields.slug === slug);
    return room;
  }

  

  return(
    <RoomContext.Provider value={{roomData: roomData, handleChange, getRoom}}>
      {props.children}
    </RoomContext.Provider>
  )
}
