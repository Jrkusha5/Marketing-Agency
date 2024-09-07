import React from 'react'

import ctaImage from '../assets/cta-image.png'
const CTA = () => {
  return (
   <section className='relative py-12'>
    <div className='max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24
    pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4
    sm:px-6  lg:px-8 '>
      <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-8'>
     
              <h1 className='text-3xl font-bold text-secondary mb-4'>
               Let's make things Happen
              </h1>
              <p className='text-gray-600 mb-6 md:w-2/3'>Our Digital marketing agency helps businesses grow amd successful online
                through a range of services including SEO, PPC ,social media marketing and
                content creation
              </p>
              <button className='inline-block px-6 py-3 bg-black text-white font-bold
              rounded-md hover:bg-primary hover:text-black transition-all duration-300'>Get your Proposal
              </button>
              
      </div>

        <div className='md:w-1/2 flex justify-center items-center relative'>
            <img src={ctaImage} alt=""  className='md:absolute md:-top-52 md:bottom-0'
            style={{transform: 'scale(1.05'}}/>
        </div>
    </div>
   </section>
  )
}

export default CTA