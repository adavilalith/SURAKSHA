import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function HomePage() {
  return (
    <>
      <div className="bg-blue-300 flex-row">
        <Navbar/>
        <div className="sm:mx-[15vw] p-4 pt-[10vh] sm:grid sm:grid-cols-12 gap-4">
          <div className=" min-h-[100px] sm:col-span-5 sm:mt-[10vh]">
              <img src="./suraksha-name-only.png" alt="SURAKSHA" className="max-h-[60px]"/>
              <h2 className='text-2xl font-bold text-gray-800 my-6'>
                Secure Your Identity Effortlessly
              </h2>
              <h4 className="text-lg text-gray-800 ">
                Experience the Future of Digital Verification Today!
              </h4>
              <p className="text-lg text-gray-800">
                Revolutionary Face Liveness Detection for Seamless Authentication
              Fast. Reliable. Privacy-Focused.
              </p>
          </div>
          <div className="bg-red-200 min-h-[100px] sm:h-[50vh] sm:col-span-7"></div>
        </div>
      </div>
    </>
  )
}
