import React from 'react'

export default function Footer() {
  return (
    

<footer className="bg-white  shadow  dark:bg-gray-800 text-center sm:text-left">
    <div className="p-4 md:flex md:items-center md:justify-between">
      <span className="    sm:ml-[5%] mr-[0%] text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://github.com/adavilalith/SURAKSHA" className="hover:underline">SURAKSHA</a></span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:mr-[20%]">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About us</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Documentation</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}
