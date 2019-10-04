import React from 'react'
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <div>
        <Hero>
          <Banner title="404 Error">
              <Link to='/hestia/' className="btn-primary">
                Go Back To Home
              </Link>
          </Banner>
        </Hero>
    </div>
  )
}
