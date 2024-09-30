import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import {createDetector} from '@tensorflow-models/face-landmarks-detection'
import {FaceMesh} from '@mediapipe/face_mesh'
import Navbar from '../../components/Navbar/Navbar';
const inputResolution = {
  width: 1280,
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
        context.clearRect(0, 0, inputResolution.width, inputResolution.height);
        context.rect(0,0,inputResolution.width, inputResolution.height)
        context.fillStyle = 'grey';
        context.fill();
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
    <div className='bg-gray-200'>
    <Navbar></Navbar>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[10%]'>

    <div className={`flex justify-center items-center max-w-[100vh] h-auto bg-black`}>
          <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          className='col-span-1 bg-pink '
          />
        </div>
      <div className='canvas-container w-full max-w-lg h-auto flex justify-center items-center overflow-hidden'>
      <canvas
      className='w-full h-auto'
          ref={canvasRef}
          mirrored
          width={inputResolution.width}
          height={inputResolution.height}
          />  
      </div>
        
    </div>
      <div className='grid sm:grid-cols-3 my-[5%] gap-10 justify-items-center align-items-center'>
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
          Blink Detection
        </button> 
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Tilt Detection
        </button> 
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Rotate Detection
        </button> 
      </div>

    </div>
  );
};

export default DemoPage;
