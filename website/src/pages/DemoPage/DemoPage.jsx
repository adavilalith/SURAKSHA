
import React,{useRef,useEffect,useState} from 'react'
import {FaceMesh} from '@mediapipe/face_mesh'
import * as Facemesh from '@mediapipe/face_mesh'
import * as cam from '@mediapipe/camera_utils'
import Webcam from 'react-webcam'

export default function DemoPage() {
  return (
    <>
    <div className='absolute m-auto left-0 right-0 text-center'>
    <Webcam >

    </Webcam>
    </div>
    </>
  )
}
