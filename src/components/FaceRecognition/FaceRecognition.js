import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
          <div className='container mt2'>
            <img id='inputImage' alt="" src={imageUrl} width='100%' hight='auto'/>
            <div className="bounding-box" style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
          </div>
        </div>
    )
}

export default FaceRecognition