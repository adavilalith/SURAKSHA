import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import {createDetector} from '@tensorflow-models/face-landmarks-detection'
import {FaceMesh} from '@mediapipe/face_mesh'

const inputResolution = {
  width: 1720,
  height: 720,
};

const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
  facingMode: "user",
};

function DemoPage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [model,setModel] = useState(null)
  const [landmarks,setLandmarks] = useState([])

  
  const detectorConfig = {
    runtime: "tfjs",
  };

  const loadModel = async ()=>{
    setModel( await createDetector(
      "MediaPipeFaceMesh",
      detectorConfig,
      )  
    )
  };

  useEffect(()=>{
    loadModel();
  },[]);

  const detectFace = async () => {
    if (webcamRef.current && model) {
      const img = webcamRef.current.getCanvas()
      const predictions = await model.estimateFaces(img);

      if (predictions.length > 0) {
        setLandmarks(predictions[0].scaledMesh);
        const context = canvasRef.current.getContext('2d')
        // console.log(predictions[0])
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        for(let keypoint in predictions[0].keypoints){
          const x = predictions[0].keypoints[keypoint].x
          const y = predictions[0].keypoints[keypoint].y
          console.log(x,y)
          context.beginPath();
          context.arc(x,y,1, 0, 2 * Math.PI); 
          context.fillStyle = 'red';
          context.fill();
        }

      }
    }

  };

  useEffect(() => {
    const interval = setInterval(() => {
      detectFace();
    }, 100); 

    return () => clearInterval(interval);
  }, [model]);

  return (
    <div>
        <Webcam
        ref={webcamRef}
        style={{ position: "absolute" }}
        videoConstraints={videoConstraints}
      />
      <canvas
        ref={canvasRef}
        width={inputResolution.width}
        height={inputResolution.height}
        style={{ position: "absolute" }}
        
      />
    </div>
  );
};

export default DemoPage;
