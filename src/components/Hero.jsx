import React from 'react'
import bannerImg from '../assets/banner.png'
import LogoCarousel from './LogoCarousel'

const Hero = () => {
  return (
    <section className='bg-white pt-12 ' id='about'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 md:py-24'>
           <div className='flex flex-col md:flex-row items-center gap-6'>

            {/*left side*/}
            <div className='md:w-1/2'>
              <div className='md:w-2/3'>
              <h1 className='text-4xl font-bold text-secondary mb-4'>
                Navigating the digital landscape for success
              </h1>
              <p className='text-gray-600 mb-6'>Our digital marketing agency helps businesses grow amd successful online
                through a range of services including SEO, PPC ,social media marketing and
                content creation
              </p>
              <button className='inline-block px-6 py-3 bg-black text-white font-bold
              rounded-md hover:bg-primary hover:text-black transition-all duration-300'>Book a Consultation
              </button>
              </div>
            </div>
            {/*Right side*/}
           <div className='md:w-1/2 order-first md:order-last'>
           <img src={bannerImg} alt="" className='w-full h-auto rounded-md' />
           </div>
           </div>

             <LogoCarousel/>

        </div>


    </section>


  )
}

export default Hero