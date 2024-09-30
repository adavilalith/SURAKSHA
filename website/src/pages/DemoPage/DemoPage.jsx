import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import {createDetector} from '@tensorflow-models/face-landmarks-detection'
import {FaceMesh} from '@mediapipe/face_mesh'

const inputResolution = {
  width: 640,
  height: 480,
};

const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
  facingMode: "user",
};

function DemoPage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRef1 = useRef(null);

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
        let context = canvasRef.current.getContext('2d')
        // console.log(predictions[0])
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        context.rect(0,0,inputResolution.width, inputResolution.height)
        context.fillStyle = 'black';
        context.fill();
        for(let keypoint in predictions[0].keypoints){
          const x = predictions[0].keypoints[keypoint].x
          const y = predictions[0].keypoints[keypoint].y
          console.log(x,y)
          context.beginPath();
          context.arc(x,y,3, 0, 2 * Math.PI); 
          context.fillStyle = 'red';
          context.fill();
        }

        context = canvasRef1.current.getContext('2d')
        // console.log(predictions[0])
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        for(let keypoint in predictions[0].keypoints){
          const x = predictions[0].keypoints[keypoint].x
          const y = predictions[0].keypoints[keypoint].y
          console.log(x,y)
          context.beginPath();
          context.arc(inputResolution.width-x,y,3, 0, 2 * Math.PI); 
          context.fillStyle = 'red';
          context.fill();
        }
      }
      else{
        setLandmarks([]);
        let context = canvasRef.current.getContext('2d')
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        context = canvasRef1.current.getContext('2d')
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        
        console.log("no face")
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
    <div className='grid sm:grid-cols-3 grid-cols-1'>
        <Webcam
        ref={webcamRef}
        videoConstraints={videoConstraints}
        className='col-span-1 w-'
        />
        <canvas
        className='col-span-1'
        ref={canvasRef}
        mirrored
        width={inputResolution.width}
        height={inputResolution.height}
        
        />
        <canvas
        className='col-span-1'
        ref={canvasRef1}
        width={inputResolution.width}
        height={inputResolution.height}
        
        />
    </div>
  );
};

export default DemoPage;
