import React from 'react'

import RoomFilter from '../components/RoomFilter/RoomFilter';
import RoomList from '../components/RoomList/RoomList';
import StyledHero from '../components/StyledHero/StyledHero';
import Banner from '../components/Banner/Banner';
import {Link} from 'react-router-dom';

export default function rooms() {

  return (
    <>
    <div>
      
    </div>
    <StyledHero>
      <Banner title="Our Rooms" >
        <Link to='/' className='btn-primary'>
          Return Home
        </Link>
      </Banner>
    </StyledHero>
    <RoomFilter />
    <RoomList />
    </>
  )
}
