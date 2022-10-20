import React from 'react'
import '../App.css';
import BookingSteps from './BookingSteps';
// import styled from 'styled-components';

import Cover from './Cover';
import Destinations from './Destinations';
import Navbar from './Navbar/Navbar';
import Packages from './Packages';
import Reviews from './Reviews';
import Service from './Service';
import ServiceStats from './ServiceStats';
import Subscription from './Subscription';
import Footer from './Footer';

function Component() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Service />
      <ServiceStats />
      <Destinations />
      <Packages />
      <BookingSteps />
      <Reviews />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Component;
