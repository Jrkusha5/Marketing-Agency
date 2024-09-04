import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import Footercontact from './Footercontact'
const Footer = () => {
  return (
   <footer className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="bg-secondary rounded-t-2xl">
             <div className='flex flex-col md:flex-row md:justify-between md:items-center
              gap-6 px-4 sm:px-16 lg:px-8  py-12'>
                <div>
                    <img src={footerLogo} alt=""  className='h-8'/>
                </div>

                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
                    <a href="#about" className='text-white hover:text-gray-400'>Home</a>
                    <a href="#services" className='text-white hover:text-gray-400'>Services</a>
                    <a href="#use-cases" className='text-white hover:text-gray-400'>UseCases</a>
                    <a href="#contact" className='text-white hover:text-gray-400'>Contacts</a>
                </div>

                <div className='flex md:justify-end space-x-4'>
                    <a href="#" className='p-1.5 text-black rounded-full bg-white'>
                        <FaFacebookF className=' hover:text-gray-400'/>

                    </a>
                    <a href="#" className='p-1.5 text-black rounded-full bg-white'><FaX className='hover:text-gray-400'/>
                    </a>
                    <a href="#" className='p-1.5 text-black rounded-full bg-white'><FaLinkedin className=' hover:text-gray-400'/>
                    </a>
                </div>
             </div>

             <Footercontact/>
             <hr className='my-4 border-white mx-4 sm:px-6 lg:px-8'/>
             <div className='flex flex-wrap md:gap-8 text-white px-4 sm:px-6 
                lg:px-8 py-5'>
                <p >&copy; 2024 Positivus.
                    All Rights Reserved
                </p>
                <p className='underline underline-offset-4'><a href="#">Privacy Policy</a></p>
             </div>
      </div>
   </footer>
  )
}

export default Footer