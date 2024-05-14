import React from 'react'
import Header from '../components/Header';
import HomeCards from '../components/HomeCards';
import EventListings from '../components/EventListings';
import ViewAllEvents from '../components/ViewAllEvents';

const HomePage = () => {
  return (
    <> 
        <Header />
        <HomeCards />
        <EventListings isHome={true} />
        <ViewAllEvents />
    </>
  )
}

export default HomePage

