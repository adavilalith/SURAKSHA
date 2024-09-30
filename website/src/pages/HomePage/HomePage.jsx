import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Footer from '../../components/Footer/Footer'


export default function HomePage() {
  const navigator = useNavigate()
  

  return (
    <>
      <div className=" flex-row bg-[url('/static/images/subtle-prism(1).png')] bg-cover">
        <Navbar/>
        <div className="sm:mx-[15vw] p-4 pt-[10vh] sm:grid sm:grid-cols-12 gap-4 pb-[50px]">
          <div className="  sm:col-span-12 sm:mt-[10vh] text-center" >
              <img src="/static/images/suraksha-name-only.png" alt="SURAKSHA" className="max-h-[60px] m-auto"/>
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
          
        </div>
        <div className='flex justify-center pb-[100px]'>
          <button onClick={()=>navigator('/Demo')} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Try the Demo
          </button>  
        </div>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 justify-items-center my-[20px] sm:mx-[20%] mx-3  gap-11 ' >
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
        </div>
        <Footer></Footer>
    </>
  )
}
