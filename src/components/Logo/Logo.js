import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
    return (
        <div className="Logo">
            <Tilt className="Tilt br1 shadow-1" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
             <div className="Tilt-inner"><img style={{padding:"18px"}}  alt="logo" src={brain}/>  </div>
            </Tilt>
        </div>
    )

}



export default Logo