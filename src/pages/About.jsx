import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">About</h1>
        <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details</p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.9</span>
      </p>
      <p>ajmal <strong>rizwan</strong></p>
     
    </div>
  )
}

export default About