import React from 'react';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import FeaturesScreen from './components/FeaturesScreen';
import ToursScreen from './components/ToursScreen';
import StoriesScreen from './components/StoriesScreen';
import BookingScreen from './components/BookingScreen';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

const App = () => {
  return (
    <div>
      <Navigation />
      <HomeScreen />
      <AboutScreen />
      <FeaturesScreen />
      <ToursScreen />
      <StoriesScreen />
      <BookingScreen />
      <Footer />
      <Popup />
    </div>
  );
};

export default App;
