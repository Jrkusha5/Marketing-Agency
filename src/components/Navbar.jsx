import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ()=>{

    const [isOpen, setIsOpen]= useState(false);
    const [activeItem, setActiveItem]=useState('');

    const toggleMenu =()=>{
        
        setIsOpen(!isOpen)
    }
    const handleMenuClick =(name)=>{
          setActiveItem(name);
          setIsOpen(false);
    }

    const menuItems =[
        {name: 'About Us', href:'#about'},
        {name: 'Services', href:'#services'},
        {name: 'UseCases', href:'#useCases'},
        {name: 'Team', href:'#team'},
        {name: 'Testimonials', href:'#testimonials'},
    ]
    return(
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center
               ">
              <div>
                    <a href="/">
                        <img src="/logo.png" alt=""  className="h-8 "/>
                    </a>
                </div>
    
            <div className="space-x-8 hidden md:flex items-center">
                {
                    menuItems.map((item,index)=> (
                        <a onClick={()=> handleMenuClick(item.name)} className={`text-black block px-2 hover:bg-primary rounded-sm
                            hover:underline underline-offset-4 transition-all duration-300
                               ${
                                activeItem ===item.name? 'bg-primary text-black underline-offset-4': '' }
                               `}
                         key={index} href={item.href}>{item.name}</a>
                    ))
                }
                 <a href="#contact" className="border px-4 py-2 border-black hover:bg-primary
                 hover:border-primary rounded-md transition-all duration-300 ">Request a Quote</a>
            </div>

            <div className="md:hidden flex items-center">
                <button 
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary">
                    {
                        isOpen ? <MdOutlineClose className="size-6"/> : <HiOutlineMenuAlt3 className="size-6"/>
                    }
                    
                    </button>
            </div>
              </div>

            </div>

            {/* mobile menu */}
            {
                isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">

                        {
                    menuItems.map((item,index)=> (
                        <a onClick={()=> handleMenuClick(item.name)} className={`text-black block px-2 hover:bg-primary rounded-sm
                        hover:underline underline-offset-4 transition-all duration-300
                           ${
                            activeItem ===item.name? 'text-primary': '' }
                           `}
                         key={index} href={item.href}>{item.name}</a>
                    ))
                }
                 <a href="#contact" className="block border px-4 py-2 border-black hover:bg-primary
                 hover:border-primary rounded-md transition-all duration-300 ">Request a Quote</a>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}
export default Navbar;