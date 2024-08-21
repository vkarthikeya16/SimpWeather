import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to WeatherNow</h1>
        <p>Your go-to app for real-time weather updates.</p>
      </header>
      
      <section className="home-content">
        <p>Stay updated with the latest weather conditions of your favorite cities.</p>
        <p>Get accurate temperature, humidity, and wind speed data in just one click.</p>
        <button 
          className="home-button"
          onClick={() => window.location.href='/login'} // Navigate to the Weather component
        >
          Check Weather Now
        </button>
      </section>
    </div>
  );
};

export default Home;
