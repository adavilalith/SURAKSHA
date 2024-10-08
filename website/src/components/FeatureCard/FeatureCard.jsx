import React from 'react'

export default function FeatureCard() {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Lorem ipsum dolor sit.</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nesciunt sed nemo deleniti voluptate aut, expedita dolorum culpa dolore distinctio..</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </a>
    </div>
  )
}
