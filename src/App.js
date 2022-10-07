import './App.css';
import BookingSteps from './components/BookingSteps';
// import styled from 'styled-components';

import Cover from './components/Cover';
import Destinations from './components/Destinations';
import Navbar from './components/Navbar/Navbar';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import Service from './components/Service';
import ServiceStats from './components/ServiceStats';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
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

export default App;