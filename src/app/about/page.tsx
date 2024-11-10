import React from 'react'

function About() {
  return (
    <div className='items-center'>
    <div className='grid md:grid-cols-2 gap-10'>    
    <div id='about' className='container pt-48 ml-9rem'>
      <h2 className='text-7xl m-40' data-aos="zoom-in">About Me</h2>
      </div>
      
      <div className='space-y-8 flex flex-cols-2'>
      <p className='text-gray-500 text-3xl pt-72 mr-4' data-aos="zoom-in">
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. I am passionate about technology and its potential to transform our lives and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>
    </div>
    </div>
  )
}

export default About;