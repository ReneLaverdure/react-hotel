import React from 'react';
import Hero from '../components/Hero/Hero';
import Tiles from '../components/Tiles/Tiles';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Featured from '../components/Featured/Featured';
import Banner from '../components/Banner/Banner';
import {Link} from 'react-router-dom';

function Home() {

  return(
    <>
    <Hero>
      <Banner title="Luxurious Rooms">
        <Link to='/rooms/' className="btn-primary">
          View Our Rooms
        </Link>
      </Banner>
    </Hero>
    <Featured />
    <Services />
    <Gallery />
    </>
  )
}

export default Home;