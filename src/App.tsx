import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './Components/Map';

function App() {
  const render = (status: Status) => (<h1>{status}</h1>)
  return (
    <div className="App">
      <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} render={render}>
        <MapComponent />
      </Wrapper>
    </div>
  );
}

export default App;
