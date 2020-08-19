import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigations/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particleOptions = {
  particles: { 
    number: { 
      value: 200, 
      density: { 
        enable: true, 
        value_area: 900, 
      } 
    }, 
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }, 
    } 
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* {  
        <FaceRecognition />} */}
        
      </div>
    );
  }
 
}

export default App;
