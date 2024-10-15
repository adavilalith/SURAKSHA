import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Navbar from '../../components/Navbar/Navbar';
import Toggle from '../../components/Toggle/Toggle';

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

  const [webcamCanvasToggleState,setwebcamCanvasToggleState] = useState(false)

  useEffect(()=>{
    if (webcamRef.current ) {
      const img = webcamRef.current.getCanvas();
      let context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, inputResolution.width, inputResolution.height);
      context.rect(0, 0, inputResolution.width, inputResolution.height);
      context.fillStyle = 'black';
      context.fill();
    }
  },[]);

  return (
    <div className='bg-gray-200'>
    <Navbar></Navbar>
    <div>
      <Toggle
        checkBoxState={webcamCanvasToggleState}
        setCheckBoxState={setwebcamCanvasToggleState}
        checkBoxText={(webcamCanvasToggleState)?"canvas":"webcam"}
      ></Toggle>
    </div>
    <div className='flex justify-center content-center'>
        <div className={'w-[60%] my-5 border-solid border-black border-2 rounded-sm '+((webcamCanvasToggleState)?'hidden [&>*]:hidden':"")}>
            <Webcam
              ref={webcamRef}
              videoConstraints={videoConstraints}
            />
        </div>
        <div className='m-0 p-0 flex justify-center content-center'>
            <canvas
                className={'m-0 w-[60%]  border-solid border-black border-2 rounded-sm '+((webcamCanvasToggleState)?"":'hidden [&>*]:hidden')}
                ref={canvasRef}
                mirrored="true"
                width={Number(inputResolution.width)}
                height={Number(inputResolution.height)}
                />  
        </div>
    </div>
      {/* <div className='grid sm:grid-cols-3 my-[5%] gap-10 justify-items-center align-items-center'>
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
          Blink Detection
        </button> 
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Tilt Detection
        </button> 
        <button onClick={""} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Rotate Detection
        </button> 
      </div> */}

    </div>
  );
};

export default DemoPage;
